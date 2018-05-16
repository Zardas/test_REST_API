import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

data: Map<String, Array<any>>;

constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  this.data = new Map<String, Array<any>>();
  this.restProvider.setapiUrl('https://jsonplaceholder.typicode.com');
  this.getData('users');
  //this.restProvider.setapiUrl('http://localhost:3000');
  //this.getData('transactions');
  console.log(this.products);
}


  	/*---------------------------------------------------------------------*/
  	/*------------Appelée lorsque on accède à tout les produits------------*/
  	/*---------------------------------------------------------------------*/
  	getData(champ: string) {
  		this.restProvider.getData(champ).then(
  			data => {
  				this.data[champ] = data;
  			},
  			error => {
  				console.warn('Error getProduct ' + error);
  			}
  		);
  	}

  	/*--------------------------------------------------------------*/
  	/*------------Appelée lorsque on accède à un produit------------*/
  	/*--------------------------------------------------------------*/
  	getDataById(champ: string, id: number) {
  		this.restProvider.getDataById(champ, id).then(
  			data => {
  				console.log('Get réussi + ' + data);
  			},
  			error => {
  				console.warn('Error getProductById ' + error);
  			}
  		);
  	}


  	/*-----------------------------------------------------------*/
  	/*------------Appelée lorsque on créer un produit------------*/
  	/*-----------------------------------------------------------*/
  	addData(champ: string, dataAfournir: any) {

  		this.restProvider.addData(champ, dataAfournir).then(
  			data => {
  				console.log(data);
  				this.data[champ].push(data);
  			},
  			error => {
  				console.warn('Error addData niveau classe ' + error);
  			}
  		);
  	}


  	/*------------------------------------------------------------*/
  	/*------------Appelée lorsque on update un produit------------*/
  	/*------------------------------------------------------------*/
  	updateProduct(product) {
  		this.restProvider.updateProduct(product).then(
  			data => {
  				console.log('Update réussi ' + data);
  				this.products[this.indiceElemSpecifique(this.products, product)] = data;
  			},
  			error => {
  				console.warn('Error updateProduct ' + error);
  			}
  		);
  	}


  	/*------------------------------------------------------------*/
  	/*------------Appelée lorsque on delete un produit------------*/
  	/*------------------------------------------------------------*/
  	deleteData(champ: string, dataAfournir: any) {
  		this.restProvider.deleteData(champ, dataAfournir).then(
  			data => {
  				console.log(data);
  				this.data[champ] = this.data[champ].filter( (e) => (e.id !== dataAfournir.id) ); //On ne supprime rien, sauf celui où l'id est celui du produit concerné
  			},
  			error => {
  				console.warn('Error deleteProduct ' + error);
  			}
  		);

  	}




  	affArray() {
  		//console.log(this.products);
  	}

  	affArrayLength() {
  		//console.log(this.products.length);
  	}

  	/*---------------------------------------------------------------------------------------------------------*/
  	/*------------Retourne l'indice de elem dans tableau (-1 si l'élément n'est pas dans le tableau) ------------*/
  	/*---------------------------------------------------------------------------------------------------------*/
  	indiceElem(tableau: any[], elem: any) {
  		let i = 0;
  		while(i < tableau.length && tableau[i] != elem) {
  			i++;
  		}

  		if(i < tableau.length) {
  			return i;
  		} else {
  			throw new Error(elem + " n'appartient pas au tableau spécifié");
  		}
  	}

  	indiceElemSpecifique(tableau: any[], elem: any) {
  		let i = 0;
  		while(i < tableau.length && tableau[i].id != elem.id) {
  			i++;
  		}

  		if(i < tableau.length) {
  			return i;
  		} else {
  			throw new Error(elem + " n'appartient pas au tableau spécifié");
  		}
  	}


  	deleteElem(tableau: any[], elem: any) {
  		let i = 0;
  		while(i < tableau.length && tableau[i] != elem) {
  			i++;
  		}
  		while(i < tableau.length-1) {
  			tableau[i] = tableau[i]+1
  		}
  	}

}
