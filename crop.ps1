
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('e:\CODES\craft-for-cause\images\hero-craft.jpg')
$cropRect = New-Object System.Drawing.Rectangle(180, 40, 460, 620)
$target = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
$g = [System.Drawing.Graphics]::FromImage($target)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropRect.Width, $cropRect.Height)
$g.DrawImage($img, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$target.Save('e:\CODES\craft-for-cause\images\pink-top-girl.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose()
$target.Dispose()
$img.Dispose()
Write-Host "Crop Completed Successfully!"
