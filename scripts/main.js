function main(){
	$('a.pjax').pjax('#load');
	$('input').focus(function(){
		$(this).val('');
	});
	$('#toolbar img').tooltip();
}