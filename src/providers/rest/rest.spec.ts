// FROM: https://www.techiediaries.com/angular-testing-httptestingcontroller/
// Explication du fonctionnement des test : https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestProvider } from  './rest';

describe('RestProvider', () => {
	let injector: TestBed;
	let myProvider: RestProvider;
	let httpMock: HttpTestingController;

	beforeEach( () => {
		TestBed.configureTestingModule( {imports: [HttpClientTestingModule], providers: [RestProvider]} );
		testBed = getTestBed();
		myProvider = testBed.get(RestProvider);
		httpMock = testBed.get(HttpTestingController);
	});
});

describe('getProducts', () => {
	it('Should return Observable<Product[]>', () => {
		const someProducts = [
			{id: 1, name: 'Product001', cost: 10, quantity: 100},
			{id: 2, name: 'Product002', cost: 100, quantity: 200},
			{id: 3, name: 'Product003', cost: 200, quantity: 300},
		];

		myProvider.getProducts().subscribe( (products) => {
			expect(products.length).toBe(3);
			expect(products).toEqual(someProducts);
		});


		const  request = httpMock.expectOne(`${myProvider.baseUrl}/products`);
		expect(req.request.method).toBe("GET");
		request.flush(someProducts);
		httpMock.verify();
	});
});