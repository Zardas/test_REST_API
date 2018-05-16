import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Product } from '../../assets/models/Product';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

// Pour démarrer le faux serveur local : json-server --watch db.json
@Injectable()



export class RestProvider {

	private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  /*-----------------------------------------*/
  /*------------setter for apiUrl------------*/
  /*-----------------------------------------*/
  setapiUrl(newApiUrl: string) {
    this.apiUrl = newApiUrl;
  }


  /*----------------------------------------------------------*/
  /*------------Sending a GET request to /champ------------*/
  /*----------------------------------------------------------*/
  getData(champ: string) {
    return new Promise(resolve => {
      console.log('API url = ' + this.apiUrl + '/' + champ);
      this.httpClient.get(this.apiUrl + '/' + champ).subscribe(
        data => {
          resolve(data);
        },
        error => {
          console.log('Erreur provider get data for ' + champ + ' : ' + error);
        }
      );
    });
  }


  /*--------------------------------------------------------------*/
  /*------------Sending a GET request to /champ/:id------------*/
  /*--------------------------------------------------------------*/
  getDataById(champ: string, id: number) {
    return new Promise(resolve => {
      this.httpClient.get(this.apiUrl + '/' + champ + '/' + id).subscribe(
        data => {
          resolve(data);
        },
        error => {
          console.log("Get échouée niveau classe : " + error);
        }
      );
    });
  }

  /*--------------------------------------------------------------*/
  /*------------Sending a GET request to /products/:id------------*/
  /*--------------------------------------------------------------*/
  getBase() {
    return new Promise(resolve => {
      this.httpClient.get(this.apiUrl).subscribe(
        data => {
          resolve(data);
        },
        error => {
          console.warn("Get base échouée " + error);
        }
      );
    });
  }

  /*-----------------------------------------------------------*/
  /*------------Sending a POST request to /champ------------*/
  /*-----------------------------------------------------------*/
  addData(champ: string, data: any) {
    return new Promise( (resolve, reject) => {
      this.httpClient.post(this.apiUrl + '/' + champ, JSON.stringify(data)).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        });
    });
  }


  /*--------------------------------------------------------------*/
  /*------------Sending a PUT request to /champ/:id------------*/
  /*--------------------------------------------------------------*/
  updateProduct(product: Product) {
    return new Promise( (resolve, reject) => {
      this.httpClient.put(this.apiUrl + '/users/' + product.id, product).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        });
    });
  }

  /*--------------------------------------------------------------*/
  /*------------Sending a DELETE request to /champ/:id------------*/
  /*--------------------------------------------------------------*/
  deleteData(champ: string, data: any) {
    return new Promise( (resolve, reject) => {
      console.log('data.id = ' + data);
      this.httpClient.delete(this.apiUrl + '/' + champ + '/' + data).subscribe(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        });
    });
  }




  
  /*public getProducts(): Observable<Product[]> {
    console.log('BBB : ' + this.httpClient.get(this.baseUrl + '/products'));
  	return this.httpClient
  		//D'abord, on appel la méthode get qui envoie une requête GET à l'endpoint (URL associée à une donnée) et retourne un endpoint
  		.get(this.baseUrl + '/products')
  		//Ensuite on appel la méthode map qui convertit l'observable de retour products en autre observable sous la forme d'un array de products
  		.map(products => {
  			return products;
  		})
  		//Et un petit catch pour finir parce que ça ne mange pas de pain...
  		.catch( (error: any) => {
  			return Observable.throw(error.statusText);
  		});
  }*/

  
  /*public createProduct(product: Product) {
  	return this.httpClient
  		.post(this.baseUrl + '/product', product)
  		.map(response => {
  			return new Product(response);
  		})
  		.catch( (error: any) => {
        console.log('AAAAAAAAAAAa')
  			return Observable.throw(error.statusText);
  		});
  }*/

  /*--------------------------------------------------------------*/
  /*------------Sending a GET request to /products/:id------------*/
  /*--------------------------------------------------------------*/
  /*public getProductsById(productId: number): Observable<Product> {
  	return this.httpClient
  		.get(this.baseUrl + 'products/' + productId)
  		.map(response => {
  			return new Product(response); //Retourne un seul produit
  		})
  		.catch( (error: any) => {
  			return Observable.throw(error.statusText);
  		});
  }*/

  
  /*public updateProduct(product: Product) {
  	return this.httpClient
  		.put(this.baseUrl + '/products/' + product.id, product)
  		.map(response => {
  			return new Product(response);
  		})
  		.catch( (error: any) => {
  			return Observable.throw(error.statusText);
  		});
  }*/

  /*-----------------------------------------------------------------*/
  /*------------Sending a DELETE request to /products/:id------------*/
  /*-----------------------------------------------------------------*/
  /*public deleteProductById(productId: number) {
  	return this.httpClient
  		.delete(this.baseUrl + '/product/' + productId)
  		.catch( (error: any) => {
  			return Observable.throw(error.statusText);
  		});
  }*/

}
