import * as THREE from "three";

const BUMP_Z_MAX: number = 1.1;

export class ActorTween {
  private shake: number = 0;
  private bump_z: number = 0;
  private bump_return: boolean = true;

  public set_shake(amount: number): void {
    if (this.shake > amount) {
      return;
    }
    this.shake = amount;
  }

  public bump(): void {
    this.bump_return = false;
  }

  public update(mesh: THREE.Mesh, base_pos: THREE.Vector3): void {
    let shake_x = 0;
    let shake_y = 0;
    if (this.shake > 0) {
      shake_x = (Math.random() * 2 - 1) * this.shake;
      shake_y = (Math.random() * 2 - 1) * this.shake;
      this.shake *= 0.9;
    }
    if (this.bump_return) {
      this.bump_z += (0 - this.bump_z) * 0.2;
    } else {
      this.bump_z += (BUMP_Z_MAX - this.bump_z) * 0.2;
      if (Math.abs(this.bump_z - BUMP_Z_MAX) < 0.02) {
        this.bump_return = true;
      }
    }
    mesh.position.x = base_pos.x + shake_x;
    mesh.position.y = base_pos.y + shake_y;
    mesh.position.z = base_pos.z + this.bump_z;
  }
}
