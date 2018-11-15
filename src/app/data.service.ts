import { Injectable } from '@angular/core';

import { defaultCollections } from './default.collections';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.init();
  }

  init() {
    // this.resetCollections();    // comente esta linea para activar la permanencia de datos
  }

  /**
   * Borrar almacenamiento local y reestablecerlo al estado de <defaultCollections>
   */
  resetCollections() {
    localStorage.clear();
    localStorage.setItem('collections', JSON.stringify(defaultCollections));
  }

  /**
   * Obtener todas las colecciones de datos en almacenamiento local
   *
   *
   * Ejemplo:
   *    let allCollections = getAllCollections();
   *    console.log(allCollections);
   */
  getAllCollections(): any {
    return JSON.parse(localStorage.getItem('collections'));
  }

  /**
   * Crear colección vacía con el nombre <collectionName>
   * Emite error si colección ya existe
   *
   * @param string collectionName
   *
   * @return [] valor de la colección creada (arreglo vacío)
   *
   *
   * Ejemplo:
   *    let newCollection = createCollection('newCollection');
   *    console.log(newCollection);
   */
  createCollection(collectionName: string): any[] {
    let collections = JSON.parse(localStorage.getItem('collections'));

    if (collections.hasOwnProperty(collectionName))
      throw new Error('collection \'' + collectionName + '\' already exists');
    else {

      collections[collectionName] = [];
      localStorage.setItem('collections', JSON.stringify(collections));

      return this.findAll(collectionName);

    }
  }

  /**
   * Borrar colección con nombre <collectionName> de almacenamiento local
   * Emite error si colección no existe
   *
   * @param string collectionName
   *
   *
   * Ejemplo:
   *    removeCollection('newCollection');
   */
  removeCollection(collectionName: string) {
    let collections = JSON.parse(localStorage.getItem('collections'));

    if (!collections.hasOwnProperty(collectionName))
      throw new Error('collection \'' + collectionName + '\' does not exist');
    else {

      delete collections[collectionName];
      localStorage.setItem('collections', JSON.stringify(collections));

    }
  }

  /**
   * Obtener todos los documentos en la colección con nombre <collectionName>
   * Emite error si colección no existe
   *
   * @param string collectionName
   *
   * @return any[] arreglo de documentos en la colección
   *
   *
   * Ejemplo:
   *    let allPosts = findAll('posts');
   *    console.log(allPosts);
   */
  findAll(collectionName: string): any[] {
    let collections = JSON.parse(localStorage.getItem('collections'));

    if (!collections.hasOwnProperty(collectionName))
      throw new Error('collection \'' + collectionName + '\' does not exist');
    else
      return collections[collectionName];
  }

  /**
   * Obtener documento en colección con nombre <collectionName> cuyo id es igual a <id>
   * Emite un error si el documento con el id provisto no existe en la colección
   *
   * @param string collectionName
   * @param string id
   *
   * @return any documento encontrado
   *
   *
   * Ejemplo:
   *    let singlePost = findById('posts', '353690247');
   *    console.log(singlePost);
   */
  findById(collectionName: string, id: string): any {
    let all = this.findAll(collectionName);
    let entry = all.find(e => e.id === id);

    if (!entry)
      throw new Error('no entry with id \'' + id + '\' found in \'' + collectionName + '\'');
    else
      return entry;
  }

  /**
   * Sobreescribir documento con id igual a <id> en colección cuyo nombre es <collectionName> con el valor de <body>
   * Emite error si colección o documento no existe
   *
   * @param string collectionName
   * @param string id
   * @param any body objeto cuyas propiedades serán sobreescritas en documento
   *
   * @return any el documento actualizado
   *
   *
   * Ejemplo:
   *    let updatedPost = this.updateById('posts', '353690247', {title: 'A new title'});
   *    console.log(updatedPost);
   */
  updateById(collectionName: string, id: string, body: any): any {
    let collections = JSON.parse(localStorage.getItem('collections'));

    if (!collections.hasOwnProperty(collectionName))
      throw new Error('collection \'' + collectionName + '\' does not exist');
    else {

      let entry = collections[collectionName].find(e => e.id === id);
      if (!entry)
        throw new Error('no entry with id \'' + id + '\' found in \'' + collectionName + '\'');
      else {

        if (body.id)
          delete body.id;

        Object.assign(entry, body);
        localStorage.setItem('collections', JSON.stringify(collections));

        return this.findById(collectionName, id);

      }

    }
  }

  /**
   * Crear nuevo documento en colección cuyo nombre es <collectionName> con valor dado por <body>
   * Automáticamente asigna a nuevo documento un id único
   * Emite error si la colección no existe
   *
   * @param string collectionName
   * @param any body objeto cuyas propiedades serán escritas en el nuevo documento
   *
   * @return any nuevo documento creado
   *
   *
   * Ejemplo:
   *    let newPost = create('posts', {title: 'A new title'});
   *    console.log(newPost);
   */
  create(collectionName: string, body: any): any {
    let collections = JSON.parse(localStorage.getItem('collections'));

    if (!collections.hasOwnProperty(collectionName))
      throw new Error('collection \'' + collectionName + '\' does not exist');
    else {

      body.id = this.generateUniqueId(collections[collectionName]);
      collections[collectionName].push(body);
      localStorage.setItem('collections', JSON.stringify(collections));

      return this.findById(collectionName, body.id);

    }
  }

  /**
   * Remover todos los documentos en colección cuyo nombre es <collectionName>
   * Emite error si la colección no existe
   *
   * @param string collectionName
   *
   *
   * Ejemplo:
   *    this.removeAll('posts');
   */
  removeAll(collectionName: string) {
    let collections = JSON.parse(localStorage.getItem('collections'));

    if (!collections.hasOwnProperty(collectionName))
      throw new Error('collection \'' + collectionName + '\' does not exist');
    else {

      collections[collectionName] = [];
      localStorage.setItem('collections', JSON.stringify(collections));

    }
  }

  /**
   * Remover documento con id igual a <id> en colección cuyo nombre es <colectionName>
   * Emite error si la colección o el documento no existe
   *
   * @param string collectionName
   * @param string id
   *
   *
   * Ejemplo:
   *    this.removeById('posts', '353690247');
   */
  removeById(collectionName: string, id: string) {
    let collections = JSON.parse(localStorage.getItem('collections'));

    if (!collections.hasOwnProperty(collectionName))
      throw new Error('collection \'' + collectionName + '\' does not exist');
    else {

      let entryIndex = collections[collectionName].findIndex(e => e.id === id);
      if (entryIndex < 0)
        throw new Error('no entry with id \'' + id + '\' found in \'' + collectionName + '\'');
      else {

        collections[collectionName].splice(entryIndex, 1);
        localStorage.setItem('collections', JSON.stringify(collections));

      }

    }
  }

  private generateId(): string {
    return Math.floor(Math.random() * 1000000000).toString();
  }

  private generateUniqueId(collection: any[]): string {
    let newId;
    let isUnique = false;

    while (!isUnique) {

      newId = this.generateId();
      isUnique = true;
      collection.forEach(e => {
        if (e.id === newId)
          isUnique = false;
      });

    }

    return newId;
  }

}
