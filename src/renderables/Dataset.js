import THREE from 'three';
import _ from 'lodash';
import {RenderableUtils} from "./RenderableUtils";

class Dataset
{
	constructor(options)
	{
		this._setupDefaultOptions(options);

		this.data = this.options.data;
		let geometry = new THREE.Geometry();
		_.forEach(this.data, (point) => {
			geometry.vertices.push(new THREE.Vector3(point.x, point.y, 0));
		});

		let material = new THREE.LineBasicMaterial({
			color: 0x0000ff,
			side: THREE.DoubleSide,
		});

		this.line = new THREE.Line(geometry, material);
		this.renderable = new THREE.Object3D();
		this.renderable.add(this.line);
	}

	_setupDefaultOptions(options)
	{
		let requiredOptions = ['data'];
		this.options = RenderableUtils.CreateOptions(options, requiredOptions, 'Dataset.options');
	}
}

export {Dataset}