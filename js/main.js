document.addEventListener('DOMContentLoaded', () => {
	let productsItems = document.querySelectorAll('.product_item'),
	selectedProducts,
	underBuyButton = document.getElementsByClassName('underBuyButton'),
	productWrapper = document.querySelectorAll('.product_wrapper');

	document.querySelectorAll('.removed').forEach((item) => {
		item.remove();
	})

	productsItems.forEach((item, i, arr) => {
		item.addEventListener('click', () => {
			item.classList.toggle('selected');
			productWrapper[i].classList.toggle('selectedWrap');
			selectedProducts = document.querySelectorAll('.selected');
			hoverFunction();
		});

		[...underBuyButton].forEach((item1, i1, arr1) => {
			item1.addEventListener('click', (e) => {
				e.preventDefault();
				productsItems[i1].classList.toggle('selected');
				productWrapper[i1].classList.toggle('selectedWrap');
				selectedProducts = document.querySelectorAll('.selected');
				hoverFunction();
			})
		});
	});

	function hoverFunction() {
		selectedProducts.forEach((item, i, arr) => {
			if (arr) {
				item.id = 'non_selected';
			}
			arr[i].addEventListener('mouseenter', e => {
				item.id = 'selected';
			})
			arr[i].addEventListener('mouseleave', e => {
				item.id = 'non_selected'
			})
		});
		productWrapper.forEach((item, i, arr) => {
			if (selectedProducts) {
				productWrapper[i].id = 'non_selected';
			}
			arr[i].addEventListener('mouseenter', e => {
				item.id = 'selected';
			})
			arr[i].addEventListener('mouseleave', e => {
				item.id = 'non_selected'
			})
		})
	}
})


