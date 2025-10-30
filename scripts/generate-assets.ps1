Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path $root
$assetsDir = Join-Path $projectRoot 'public/assets'
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir | Out-Null
}

$navy = [System.Drawing.Color]::FromArgb(0x0f, 0x17, 0x2a)
$accent = [System.Drawing.Color]::FromArgb(0xf9, 0x73, 0x16)
$ivory = [System.Drawing.Color]::FromArgb(0xf8, 0xfa, 0xfc)
$pngFormat = [System.Drawing.Imaging.ImageFormat]::Png

function New-Brush($color) {
    return New-Object System.Drawing.SolidBrush($color)
}

function Save-Bitmap([System.Drawing.Bitmap] $bitmap, [string] $path, [System.Drawing.Imaging.ImageFormat] $format) {
    $bitmap.Save($path, $format)
    $bitmap.Dispose()
}

function New-Graphics($width, $height) {
    $bitmap = New-Object System.Drawing.Bitmap($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    return @{ Bitmap = $bitmap; Graphics = $graphics }
}

# Logo
$logo = New-Graphics 512 512
$logo.Graphics.Clear($navy)
$logo.Graphics.FillEllipse((New-Brush $accent), 116, 116, 280, 280)
$logo.Graphics.FillEllipse((New-Brush $ivory), 212, 212, 96, 96)
$logoFont = New-Object System.Drawing.Font('Segoe UI', 42, [System.Drawing.FontStyle]::Bold)
$centerFormat = New-Object System.Drawing.StringFormat
$centerFormat.Alignment = [System.Drawing.StringAlignment]::Center
$centerFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
$logo.Graphics.DrawString('RD', $logoFont, (New-Brush $ivory), 256, 256, $centerFormat)
$logo.Graphics.Dispose()
Save-Bitmap $logo.Bitmap (Join-Path $assetsDir 'logo.png') $pngFormat

# Screenshot placeholder
$screenshot = New-Graphics 1280 720
$gradientRect = New-Object System.Drawing.Rectangle(0, 0, 1280, 720)
$gradientBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($gradientRect, $navy, $accent, [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal)
$screenshot.Graphics.FillRectangle($gradientBrush, $gradientRect)
$cardRect = New-Object System.Drawing.Rectangle(180, 140, 920, 480)
$cardPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$radius = 28
$diameter = $radius * 2
$cardPath.AddArc($cardRect.X, $cardRect.Y, $diameter, $diameter, 180, 90)
$cardPath.AddArc($cardRect.Right - $diameter, $cardRect.Y, $diameter, $diameter, 270, 90)
$cardPath.AddArc($cardRect.Right - $diameter, $cardRect.Bottom - $diameter, $diameter, $diameter, 0, 90)
$cardPath.AddArc($cardRect.X, $cardRect.Bottom - $diameter, $diameter, $diameter, 90, 90)
$cardPath.CloseFigure()
$screenshot.Graphics.FillPath((New-Brush ([System.Drawing.Color]::FromArgb(230, $ivory.R, $ivory.G, $ivory.B))), $cardPath)
$cardPath.Dispose()
$titleFont = New-Object System.Drawing.Font('Segoe UI', 36, [System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font('Segoe UI', 20)
$textBrush = New-Brush $navy
$screenshot.Graphics.DrawString('Generador de PPT con IA', $titleFont, $textBrush, 200, 180)
$screenshot.Graphics.DrawString('React · Django · ChatGPT', $bodyFont, $textBrush, 200, 260)
$screenshot.Graphics.Dispose()
Save-Bitmap $screenshot.Bitmap (Join-Path $assetsDir 'screenshot-1.png') $pngFormat

# Open Graph image
$og = New-Graphics 1200 630
$ogRect = New-Object System.Drawing.Rectangle(0, 0, 1200, 630)
$ogGradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush($ogRect, $navy, [System.Drawing.Color]::FromArgb(0xff, 0x1f, 0x2a, 0x44), [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal)
$og.Graphics.FillRectangle($ogGradient, $ogRect)
$ogTitleFont = New-Object System.Drawing.Font('Segoe UI', 58, [System.Drawing.FontStyle]::Bold)
$ogBodyFont = New-Object System.Drawing.Font('Segoe UI', 26)
$og.Graphics.DrawString('Rodrigo Diaz', $ogTitleFont, (New-Brush $ivory), 80, 160)
$og.Graphics.DrawString('Generador de Presentaciones con IA', $ogBodyFont, (New-Brush $accent), 80, 260)
$og.Graphics.DrawString('React · Django · ChatGPT · PostgreSQL · Vercel', $ogBodyFont, (New-Brush $ivory), 80, 320)
$og.Graphics.Dispose()
Save-Bitmap $og.Bitmap (Join-Path $assetsDir 'og-image.png') $pngFormat

# Favicon
$iconBitmap = New-Object System.Drawing.Bitmap 64, 64
$iconGraphics = [System.Drawing.Graphics]::FromImage($iconBitmap)
$iconGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$iconGraphics.Clear([System.Drawing.Color]::Transparent)
$iconGraphics.FillRectangle((New-Brush $navy), 0, 0, 64, 64)
$iconGraphics.FillEllipse((New-Brush $accent), 12, 12, 40, 40)
$iconFont = New-Object System.Drawing.Font('Segoe UI', 18, [System.Drawing.FontStyle]::Bold)
$iconFormat = New-Object System.Drawing.StringFormat
$iconFormat.Alignment = [System.Drawing.StringAlignment]::Center
$iconFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
$iconGraphics.DrawString('RD', $iconFont, (New-Brush $ivory), 32, 32, $iconFormat)
$iconGraphics.Dispose()
$icon = [System.Drawing.Icon]::FromHandle($iconBitmap.GetHicon())
$iconStream = [System.IO.File]::Create((Join-Path $projectRoot 'public/favicon.ico'))
$icon.Save($iconStream)
$iconStream.Dispose()
$icon.Dispose()
$iconBitmap.Dispose()
