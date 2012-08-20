<?php
$lines=explode("\n", file_get_contents('lines.txt'));
echo $lines[array_rand($lines)];
?>