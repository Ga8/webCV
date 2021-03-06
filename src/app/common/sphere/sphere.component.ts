import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.scss']
})
export class SphereComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngAfterViewInit(): void {


    function fitElementToParent(el: any, padding: number | undefined) {
      var timeout: any = null;
      function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, {scale: 1});
        var pad = padding || 0;
        var parentEl = el!.parentNode;
        var elOffsetWidth = el!.offsetWidth! - pad;
        var parentOffsetWidth = parentEl!.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
      }
      resize();
      window.addEventListener('resize', resize);
    }

    var sphereAnimation = (function() {

      var sphereEl = document.querySelector('.sphere-animation');
      var spherePathEls = sphereEl!.querySelectorAll('.sphere path');
      var pathLength = spherePathEls.length;
      var hasStarted = false;
      var aimations: any[] = [];

      fitElementToParent(sphereEl, 0);

      var breathAnimation = anime({
        begin: function() {
          for (var i = 0; i < pathLength; i++) {
            aimations.push(anime({
              targets: spherePathEls[i],
              stroke: {value: ['rgba(8,253,216,1)', 'rgba(80,80,80,.35)'], duration: 500},
              translateX: [2, -4],
              translateY: [2, -4],
              easing: 'easeOutQuad',
              autoplay: false
            }));
          }
        },
        update: function(ins: { currentTime: number; }) {
          aimations.forEach(function(animation, i) {
            var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
            animation.seek(animation.duration * percent);
          });
        },
        duration: Infinity,
        autoplay: false
      });

      var introAnimation = anime.timeline({
        autoplay: false
      })
      .add({
        targets: spherePathEls,
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 3900,
          easing: 'easeInOutCirc',
          delay: anime.stagger(190, {direction: 'reverse'})
        },
        duration: 2000,
        delay: anime.stagger(60, {direction: 'reverse'}),
        easing: 'linear'
      }, 0);

      var shadowAnimation = anime({
          targets: '#sphereGradient',
          x1: '25%',
          x2: '25%',
          y1: '0%',
          y2: '75%',
          duration: 30000,
          easing: 'easeOutQuint',
          autoplay: false
        }, 0);

      function init() {
        introAnimation.play();
        breathAnimation.play();
        shadowAnimation.play();
      }

      init();

    })();

}
  ngOnInit() {
  }

}
