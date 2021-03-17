import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/carrito';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) {
  }

  headerDict = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  getAll() {
    return this.http.get(baseUrl);
  }

  getCarritos() {
    return this.http.get(baseUrl + '/getCarritos');
  }

  getProductos() {
    return this.http.get(baseUrl + '/getProductos');
  }

  getClientes() {
    return this.http.get(baseUrl + '/getClientes');
  }


  getTotal(){
    return this.http.get(baseUrl + '/gettotal');
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`, this.requestOptions);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
