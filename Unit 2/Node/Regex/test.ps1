$wshell = New-Object -ComObject wscript.shell;
$wshell.AppActivate('Opera')
Sleep 2
$wshell.SendKeys("package Moose::Meta::Method::Constructor;~use strict;~use warnings;~use Scalar::Util 'blessed', 'weaken', 'looks_like_number', 'refaddr';~our `$VERSION = '1.08';~our `$AUTHORITY = 'cpan:STEVAN';~use base 'Moose::Meta::Method',~'Class::MOP::Method::Constructor';~sub new {{}~my `$class = shift;~my {%}options = @_;~my `$meta = `$options{{}metaclass{}};~{(}ref `$options{{}options{}} eq 'HASH'{)}~|| `$class->throw_error{(}`"You must pass a hash of options`", data => `$options{{}options{}}{)};")