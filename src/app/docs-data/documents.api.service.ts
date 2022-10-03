import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocItem } from './documents.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentsApiService {
  constructor(private readonly http: HttpClient) {}

  getDocs(from: number, to: number) {
    return this.http.get<DocItem[]>('/docs', { params: { from, to } });
  }

  updateDoc(doc: DocItem) {
    return this.http.put<DocItem>('/docs', doc, { params: { id: doc.id } });
  }
}
