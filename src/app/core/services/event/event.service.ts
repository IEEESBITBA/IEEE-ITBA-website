import { Injectable } from '@angular/core';
import { EventCardData } from '../../../shared/models/event/event-card-data';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private ieeextreme: EventCardData = { routerLink: '/ieeextreme', imageSrc: 'https://i.ibb.co/YNBZxNs/ieee-extreme.jpg',
    imageAlt: 'Foto de competicion IEEExtreme', titleCode: 'HOME.IEEEXTREME.TITLE', descriptionCode: 'HOME.IEEEXTREME.TEXT'};

  private cursosPython: EventCardData = { routerLink: '/cursospython', imageSrc: 'https://i.ibb.co/q1QyW01/cursopython.jpg',
    imageAlt: 'Foto de los cursos de Python', titleCode: 'HOME.CLASSES.TITLE', descriptionCode: 'HOME.CLASSES.TEXT'};

  private bitcup: EventCardData = { routerLink: '/bitcup', imageSrc: '../../../../../assets/image/courses/bitcup-logo.jpeg',
    imageAlt: 'Foto de los cursos de Python', titleCode: 'HOME.BITCUP.TITLE', descriptionCode: 'HOME.BITCUP.TEXT'};

  private dataAnalysis: EventCardData = { routerLink: '/data-analysis', imageSrc: '../../../../../assets/image/courses/data-analysis-event.png',
    imageAlt: 'Foto de curso analisis de datos', titleCode: 'HOME.DATAANALYSIS.TITLE', descriptionCode: 'HOME.DATAANALYSIS.TEXT'};

  private asimovCup: EventCardData = { routerLink: '/asimovcup', imageSrc: '../../../../../assets/image/courses/asimov-cup-logo.png',
    imageAlt: 'Logo de la Asimov Cup', titleCode: 'HOME.ASIMOVCUP.TITLE', descriptionCode: 'HOME.ASIMOVCUP.TEXT'};

  constructor() { }

  getAllEvents(): EventCardData[] {
    return [ this.ieeextreme, this.cursosPython, this.bitcup, this.dataAnalysis, this.asimovCup];
  }

  getRasEvents(): EventCardData[] {
    return [ this.asimovCup ];
  }

}