import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotoBoardService } from "./photo-board.service";
import { HttpResponse } from "@angular/common/http";

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1, 
      description: 'example 1',
      src: ''
    },
    {
      id: 2,
      description: 'example 2',
      src: ''
    }
  ]
};

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;
  let ht: HttpErrorResponse<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService]
    });

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController)
  });
 
  afterEach(() => httpController.verify()); // verifica se existe alguma requisição feita não tem resposta programda (body)

  it('#getPhotos should return photos with description in uppercase', done => {
    service.getPhotos().subscribe(photos => {
      console.warn(photos[0].description)
      expect(photos[0].description).toBe('EXAMPLE 1');
      expect(photos[1].description).toBe('EXAMPLE 2');
      done();
    });

    // httpController tem que ser passado depois porque o método http faz a requisição
    // e fica em stand-by esperando o que deve acontecer com o método
    httpController
    .expectOne(mockData.api) // toda vez que uma requisição para essa api for feita, substitui com o dado do flush
    .flush(mockData.data); // dado que o httpClient vai receber é falso e não do backend
  });
});
