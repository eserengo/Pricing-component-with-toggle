(function () {

  const eventHandler = () => {
    document.getElementById('checkbox').addEventListener('change', () => {
      document.querySelectorAll('.monthly').forEach(item => {
        item.classList.toggle('hidden');
      })
      document.querySelectorAll('.anually').forEach(item => {
        item.classList.toggle('hidden');
      })
    })
  }
  
  const displayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.main').classList.remove('flex-row');
      document.querySelector('.main').classList.add('flex-col');
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.main').classList.remove('flex-col');
      document.querySelector('.main').classList.add('flex-row');
    }
  }

  // ----- WINDOW ON RESIZE FUNCTION WITH TIMEOUT DEBOUNCING TECHNIQUE ------

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });

  // ------ FUNCTIONS TO EXECUTE AFTER THE CONTENT HAS BEEN INJECTED

  window.addEventListener('DOMContentLoaded', () => {
    // FUNCTIONS
    eventHandler();
    displayOnResize();   // MUST BE THE LAST FUNCTION TO LOAD
  })
})();