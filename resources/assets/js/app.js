/*
Author       : Dreamguys
Template Name: SmartHR - Bootstrap Admin Template
Version      : 3.6
*/

$(document).ready(function() {
	
	// Variables declarations
	
	var $wrapper = $('.main-wrapper');
	var $pageWrapper = $('.page-wrapper');
	var $slimScrolls = $('.slimscroll');
	
	// Sidebar
	
	var Sidemenu = function() {
		this.$menuItem = $('#sidebar-menu a');
	};
	
	function init() {
		var $this = Sidemenu;
		$('#sidebar-menu a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}
	
	// Sidebar Initiate
	init();
	
	// Mobile menu sidebar overlay
	
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		$('#task_window').removeClass('opened');
		return false;
	});
	
	$(".sidebar-overlay").on("click", function () {
			$('html').removeClass('menu-opened');
			$(this).removeClass('opened');
			$wrapper.removeClass('slide-nav');
			$('.sidebar-overlay').removeClass('opened');
			$('#task_window').removeClass('opened');
	});
	
	// Chat sidebar overlay
	
	$(document).on('click', '#task_chat', function() {
		$('.sidebar-overlay').toggleClass('opened');
		$('#task_window').addClass('opened');
		return false;
	});
	
	// Select 2
	
	if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	
	// Modal Popup hide show

	if($('.modal').length > 0 ){
		var modalUniqueClass = ".modal";
		$('.modal').on('show.bs.modal', function(e) {
		  var $element = $(this);
		  var $uniques = $(modalUniqueClass + ':visible').not($(this));
		  if ($uniques.length) {
			$uniques.modal('hide');
			$uniques.one('hidden.bs.modal', function(e) {
			  $element.modal('show');
			});
			return false;
		  }
		});
	}
	
	// Floating Label

	if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
	
	// Sidebar Slimscroll

	if($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}
	
	// Page Content Height

	var pHeight = $(window).height();
	$pageWrapper.css('min-height', pHeight);
	$(window).resize(function() {
		var prHeight = $(window).height();
		$pageWrapper.css('min-height', prHeight);
	});
	
	// Date Time Picker
	
	if($('.datetimepicker').length > 0) {
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY',
			icons: {
				up: "fa fa-angle-up",
				down: "fa fa-angle-down",
				next: 'fa fa-angle-right',
				previous: 'fa fa-angle-left'
			}
		});
	}
	
	// Datatable

	if($('.datatable').length > 0) {
		$('.datatable').DataTable({
			"bFilter": true,
			language:{
				"emptyTable": "Nenhum registro encontrado",
				"info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
				"infoEmpty": "Mostrando 0 até 0 de 0 registros",
				"infoFiltered": "(Filtrados de _MAX_ registros)",
				"infoThousands": ".",
				"loadingRecords": "Carregando...",
				"processing": "Processando...",
				"zeroRecords": "Nenhum registro encontrado",
				"search": "Pesquisar",
				"paginate": {
					"next": "Próximo",
					"previous": "Anterior",
					"first": "Primeiro",
					"last": "Último"
				},
				"aria": {
					"sortAscending": ": Ordenar colunas de forma ascendente",
					"sortDescending": ": Ordenar colunas de forma descendente"
				},
				"select": {
					"rows": {
						"_": "Selecionado %d linhas",
						"1": "Selecionado 1 linha"
					},
					"cells": {
						"1": "1 célula selecionada",
						"_": "%d células selecionadas"
					},
					"columns": {
						"1": "1 coluna selecionada",
						"_": "%d colunas selecionadas"
					}
				},
				"buttons": {
					"copySuccess": {
						"1": "Uma linha copiada com sucesso",
						"_": "%d linhas copiadas com sucesso"
					},
					"collection": "Coleção  <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
					"colvis": "Visibilidade da Coluna",
					"colvisRestore": "Restaurar Visibilidade",
					"copy": "Copiar",
					"copyKeys": "Pressione ctrl ou u2318 + C para copiar os dados da tabela para a área de transferência do sistema. Para cancelar, clique nesta mensagem ou pressione Esc..",
					"copyTitle": "Copiar para a Área de Transferência",
					"csv": "CSV",
					"excel": "Excel",
					"pageLength": {
						"-1": "Mostrar todos os registros",
						"_": "Mostrar %d registros"
					},
					"pdf": "PDF",
					"print": "Imprimir",
					"createState": "Criar estado",
					"removeAllStates": "Remover todos os estados",
					"removeState": "Remover",
					"renameState": "Renomear",
					"savedStates": "Estados salvos",
					"stateRestore": "Estado %d",
					"updateState": "Atualizar"
				},
				"autoFill": {
					"cancel": "Cancelar",
					"fill": "Preencher todas as células com",
					"fillHorizontal": "Preencher células horizontalmente",
					"fillVertical": "Preencher células verticalmente"
				},
				"lengthMenu": "Exibir _MENU_ resultados por página",
				"searchBuilder": {
					"add": "Adicionar Condição",
					"button": {
						"0": "Construtor de Pesquisa",
						"_": "Construtor de Pesquisa (%d)"
					},
					"clearAll": "Limpar Tudo",
					"condition": "Condição",
					"conditions": {
						"date": {
							"after": "Depois",
							"before": "Antes",
							"between": "Entre",
							"empty": "Vazio",
							"equals": "Igual",
							"not": "Não",
							"notBetween": "Não Entre",
							"notEmpty": "Não Vazio"
						},
						"number": {
							"between": "Entre",
							"empty": "Vazio",
							"equals": "Igual",
							"gt": "Maior Que",
							"gte": "Maior ou Igual a",
							"lt": "Menor Que",
							"lte": "Menor ou Igual a",
							"not": "Não",
							"notBetween": "Não Entre",
							"notEmpty": "Não Vazio"
						},
						"string": {
							"contains": "Contém",
							"empty": "Vazio",
							"endsWith": "Termina Com",
							"equals": "Igual",
							"not": "Não",
							"notEmpty": "Não Vazio",
							"startsWith": "Começa Com",
							"notContains": "Não contém",
							"notStarts": "Não começa com",
							"notEnds": "Não termina com"
						},
						"array": {
							"contains": "Contém",
							"empty": "Vazio",
							"equals": "Igual à",
							"not": "Não",
							"notEmpty": "Não vazio",
							"without": "Não possui"
						}
					},
					"data": "Data",
					"deleteTitle": "Excluir regra de filtragem",
					"logicAnd": "E",
					"logicOr": "Ou",
					"title": {
						"0": "Construtor de Pesquisa",
						"_": "Construtor de Pesquisa (%d)"
					},
					"value": "Valor",
					"leftTitle": "Critérios Externos",
					"rightTitle": "Critérios Internos"
				},
				"searchPanes": {
					"clearMessage": "Limpar Tudo",
					"collapse": {
						"0": "Painéis de Pesquisa",
						"_": "Painéis de Pesquisa (%d)"
					},
					"count": "{total}",
					"countFiltered": "{shown} ({total})",
					"emptyPanes": "Nenhum Painel de Pesquisa",
					"loadMessage": "Carregando Painéis de Pesquisa...",
					"title": "Filtros Ativos",
					"showMessage": "Mostrar todos",
					"collapseMessage": "Fechar todos"
				},
				"thousands": ".",
				"datetime": {
					"previous": "Anterior",
					"next": "Próximo",
					"hours": "Hora",
					"minutes": "Minuto",
					"seconds": "Segundo",
					"amPm": [
						"am",
						"pm"
					],
					"unknown": "-",
					"months": {
						"0": "Janeiro",
						"1": "Fevereiro",
						"10": "Novembro",
						"11": "Dezembro",
						"2": "Março",
						"3": "Abril",
						"4": "Maio",
						"5": "Junho",
						"6": "Julho",
						"7": "Agosto",
						"8": "Setembro",
						"9": "Outubro"
					},
					"weekdays": [
						"Domingo",
						"Segunda-feira",
						"Terça-feira",
						"Quarta-feira",
						"Quinte-feira",
						"Sexta-feira",
						"Sábado"
					]
				},
				"editor": {
					"close": "Fechar",
					"create": {
						"button": "Novo",
						"submit": "Criar",
						"title": "Criar novo registro"
					},
					"edit": {
						"button": "Editar",
						"submit": "Atualizar",
						"title": "Editar registro"
					},
					"error": {
						"system": "Ocorreu um erro no sistema (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Mais informações<\/a>)."
					},
					"multi": {
						"noMulti": "Essa entrada pode ser editada individualmente, mas não como parte do grupo",
						"restore": "Desfazer alterações",
						"title": "Multiplos valores",
						"info": "Os itens selecionados contêm valores diferentes para esta entrada. Para editar e definir todos os itens para esta entrada com o mesmo valor, clique ou toque aqui, caso contrário, eles manterão seus valores individuais."
					},
					"remove": {
						"button": "Remover",
						"confirm": {
							"_": "Tem certeza que quer deletar %d linhas?",
							"1": "Tem certeza que quer deletar 1 linha?"
						},
						"submit": "Remover",
						"title": "Remover registro"
					}
				},
				"decimal": ",",
				"stateRestore": {
					"creationModal": {
						"button": "Criar",
						"columns": {
							"search": "Busca de colunas",
							"visible": "Visibilidade da coluna"
						},
						"name": "Nome:",
						"order": "Ordernar",
						"paging": "Paginação",
						"scroller": "Posição da barra de rolagem",
						"search": "Busca",
						"searchBuilder": "Mecanismo de busca",
						"select": "Selecionar",
						"title": "Criar novo estado",
						"toggleLabel": "Inclui:"
					},
					"duplicateError": "Já existe um estado com esse nome",
					"emptyError": "Não pode ser vazio",
					"emptyStates": "Nenhum estado salvo",
					"removeConfirm": "Confirma remover %s?",
					"removeError": "Falha ao remover estado",
					"removeJoiner": "e",
					"removeSubmit": "Remover",
					"removeTitle": "Remover estado",
					"renameButton": "Renomear",
					"renameLabel": "Novo nome para %s:",
					"renameTitle": "Renomear estado"
				}
			}
		});
	}
	
	// Tooltip

	if($('[data-toggle="tooltip"]').length > 0) {
		$('[data-toggle="tooltip"]').tooltip();
	}
	
	// Email Inbox

	if($('.clickable-row').length > 0 ){
		$(".clickable-row").click(function() {
			window.location = $(this).data("href");
		});
	}

	// Check all email
	
	$(document).on('click', '#check_all', function() {
		$('.checkmail').click();
		return false;
	});
	if($('.checkmail').length > 0) {
		$('.checkmail').each(function() {
			$(this).on('click', function() {
				if($(this).closest('tr').hasClass('checked')) {
					$(this).closest('tr').removeClass('checked');
				} else {
					$(this).closest('tr').addClass('checked');
				}
			});
		});
	}
	
	// Mail important
	
	$(document).on('click', '.mail-important', function() {
		$(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');
	});
	
	// Summernote
	
	if($('.summernote').length > 0) {
		$('.summernote').summernote({
			height: 200,                 // set editor height
			minHeight: null,             // set minimum height of editor
			maxHeight: null,             // set maximum height of editor
			focus: false                 // set focus to editable area after initializing summernote
		});
	}
	
	// Task Complete
	
	$(document).on('click', '#task_complete', function() {
		$(this).toggleClass('task-completed');
		return false;
	});
	
	// Multiselect

	if($('#customleave_select').length > 0) {
		$('#customleave_select').multiselect();
	}
	if($('#edit_customleave_select').length > 0) {
		$('#edit_customleave_select').multiselect();
	}

	// Leave Settings button show
	
	$(document).on('click', '.leave-edit-btn', function() {
		$(this).removeClass('leave-edit-btn').addClass('btn btn-white leave-cancel-btn').text('Cancel');
		$(this).closest("div.leave-right").append('<button class="btn btn-primary leave-save-btn" type="submit">Save</button>');
		$(this).parent().parent().find("input").prop('disabled', false);
		return false;
	});
	$(document).on('click', '.leave-cancel-btn', function() {
		$(this).removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
		$(this).closest("div.leave-right").find(".leave-save-btn").remove();
		$(this).parent().parent().find("input").prop('disabled', true);
		return false;
	});
	
	$(document).on('change', '.leave-box .onoffswitch-checkbox', function() {
		var id = $(this).attr('id').split('_')[1];
		if ($(this).prop("checked") == true) {
			$("#leave_"+id+" .leave-edit-btn").prop('disabled', false);
			$("#leave_"+id+" .leave-action .btn").prop('disabled', false);
		}
	    else {
			$("#leave_"+id+" .leave-action .btn").prop('disabled', true);	
			$("#leave_"+id+" .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
			$("#leave_"+id+" .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
			$("#leave_"+id+" .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
			$("#leave_"+id+" .leave-edit-btn").prop('disabled', true);
		}
	});
	
	$('.leave-box .onoffswitch-checkbox').each(function() {
		var id = $(this).attr('id').split('_')[1];
		if ($(this).prop("checked") == true) {
			$("#leave_"+id+" .leave-edit-btn").prop('disabled', false);
			$("#leave_"+id+" .leave-action .btn").prop('disabled', false);
		}
	    else {
			$("#leave_"+id+" .leave-action .btn").prop('disabled', true);	
			$("#leave_"+id+" .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
			$("#leave_"+id+" .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
			$("#leave_"+id+" .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
			$("#leave_"+id+" .leave-edit-btn").prop('disabled', true);
		}
	});
	
	// Placeholder Hide

	if ($('.otp-input, .zipcode-input input, .noborder-input input').length > 0) {
		$('.otp-input, .zipcode-input input, .noborder-input input').focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'))
				   .attr('placeholder', '');
		}).blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	}
	
	// OTP Input
	
	if ($('.otp-input').length > 0) {
		$(".otp-input").keyup(function(e) {
			if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
				$(e.target).next('.otp-input').focus();
			} else if (e.which == 8) {
				$(e.target).prev('.otp-input').focus();
			}
		});
	}
	
	// Small Sidebar

	$(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
	});
	
	$(document).on('click', '.top-nav-search .responsive-search', function() {
		$('.top-nav-search').toggleClass('active');
	});
	
	$(document).on('click', '#file_sidebar_toggle', function() {
		$('.file-wrap').toggleClass('file-sidebar-toggle');
	});
	
	$(document).on('click', '.file-side-close', function() {
		$('.file-wrap').removeClass('file-sidebar-toggle');
	});
	
	if($('.kanban-wrap').length > 0) {
		$(".kanban-wrap").sortable({
			connectWith: ".kanban-wrap",
			handle: ".kanban-box",
			placeholder: "drag-placeholder"
		});
	}

});

// Loader

$(window).on ('load', function (){
	$('#loader').delay(100).fadeOut('slow');
	$('#loader-wrapper').delay(500).fadeOut('slow');
});