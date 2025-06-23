document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu-top__link');
  const productList = document.querySelectorAll('.menu-product');

  const categoryMap = {
    0: 0,
    1: 2,
    2: 1,
  };

  buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      buttons.forEach(b => b.classList.remove('active'));

      button.classList.add('active');

      productList.forEach(product => {
        product.classList.add('none');
      });

      const targetIndex = categoryMap[index];
      productList[targetIndex].classList.remove('none');

    });
  });
});

document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
});
