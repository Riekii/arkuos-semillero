import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { STLLoader } from 'three-stdlib';
import * as THREE from 'three'

@Component({
  selector: 'app-model-viewer',
  standalone: true,
  imports: [],
  templateUrl: './model-viewer.component.html',
  styleUrl: './model-viewer.component.scss'
})
export class ModelViewerComponent implements OnChanges {

  @Input('model') modelLink: any = 'assets/3d/sunflower.stl';


  constructor(private el: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initThreeJS();
  }

  ngOnChanges(): void {

  }

  private initThreeJS() {
    // Referencia al contenedor del renderer
    const container = this.el.nativeElement.querySelector('#rendererContainer');

    // Crear la escena, cámara y renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Configurar la luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Posicionar la cámara
    camera.position.z = 300;
    camera.position.y = 60;

    // Cargar el modelo STL
    const loader = new STLLoader();
    loader.setCrossOrigin("no-cors");
    this.modelLink = this.modelLink;
    console.warn('MODELO: ', this.modelLink)
    loader.load(this.modelLink, (geometry) => {
      const material = new THREE.MeshStandardMaterial({ color: 0x0055ff });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Renderizar la escena
      function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x = 5;
        // mesh.rotation.y += 0.1; // Rotar el modelo
        renderer.render(scene, camera);
      }
      animate();
    },
      (progress: any) => { },
      (error: any) => {
        console.log('error: ', error)
      },
    );
  }
}
