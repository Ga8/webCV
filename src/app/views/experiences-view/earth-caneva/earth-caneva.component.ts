import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { AxesHelper, BoxBufferGeometry, Material, Mesh, MeshNormalMaterial } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { EngineService } from '../engines-service';
@Component({
  selector: 'app-earth-caneva',
  templateUrl: './earth-caneva.component.html',
  styleUrls: ['./earth-caneva.component.scss']
})
export class EarthCanevaComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;




  constructor(private engineService :EngineService) {

  }



  ngOnInit(): void {
    this.engineService.createScene(this.rendererCanvas);
    this.engineService.animate();
  }

}
