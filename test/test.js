$('*').css('display', 'none');

/**
 * Para ler:
 */
$.get('https://raw.githubusercontent.com/lffg/tutorial-installer/master/test/test.js')
	.done(function (context) {
		$('<script>', {
			text: context,
			type: 'text/javascript'
		}).appendTo('head');
	})
	.fail(function () {
		alert([
      'Houve um erro ao tentar carregar um ou mais scripts necessários para o funcionemtno dessa página.',
      'Caso o problema continue, contate o suporte técnico.',
      '',
      '',
      'Ao clicar em "OK", a página será atualizada.'
    ].join('\n'));
  
    location.reload();
	})
;
