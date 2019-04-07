var slider = null;

document.addEventListener('DOMContentLoaded',function () {
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');

	var clickButton = function (event) {
		var button = event.currentTarget.getAttribute('id');

		slide(button);
	}

	prev.addEventListener('click', clickButton);
	next.addEventListener('click', clickButton);

	setInterval(function () {
		slide('next');
	}, 3000);

	slider = document.getElementsByClassName('carousel-wrapper') [0];
});

function slide(button) {
	var slide = slider.getElementsByClassName('active')[0];

	if (button === 'next') {
		var dataId = parseInt(slide.getAttribute('data-id')) + 1;
	} else if (button === 'prev') {
		var dataId = parseInt(slide.getAttribute('data-id')) - 1;
	}

	var nextSlide = slider.querySelector('[data-id="' + dataId + '"]');

	slide.classList.remove('active');

	if (nextSlide !==null) {
		nextSlide.classList.add('active');
	} else {
		var img = slider.getElementsByTagName('img');

		if (button === 'next') {
			img[0].classList.add('active');
		} else if (button === 'prev') {
			img[img.length - 1].classList.add('active');
		}
	}
}
// САМА 


 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active","");
  }
  //slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
