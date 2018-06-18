
introExit();

function introExit() {
    document.querySelector('svg').style.setProperty('opacity', '1');
    setTimeout(
        function(){
            document.querySelector('.slide-1').style.setProperty('right', '0');
            document.querySelector('.slide-2').style.setProperty('right', '0');
            
        }, 2000);
    setTimeout(
        function(){
            document.querySelector('.intro-2').style.setProperty('display', 'none');
        }, 3000);
    setTimeout(
        function(){
            document.querySelector('.after-intro').style.setProperty('opacity', '1');
        }, 3000);
}

