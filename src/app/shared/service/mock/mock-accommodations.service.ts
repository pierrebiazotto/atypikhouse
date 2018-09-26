import { Injectable } from '@angular/core';
import { Accommodation } from './../../../accommodations/accommodation';

export const ACCOMMODATIONS: Accommodation[] = [
  // {
  //   id_accommodation: 1,
  //   title: 'Charmante cabane au fond d\'un jardin',
  //   price: 54,
  //   number_pieces: 1,
  //   number_bed: 2,
  //   description_accommodation:'Une cabine solide avec beaucoup de lumière naturelle, directement dans un jardin fleuri. On aura l\'impression de vivre à l\'extérieur, tandis qu\'à l\'intérieur de la cabine, il y a un arôme persistant de bois de larix et de crépitements du poêle à bois.',
  //   available: '26;27;28;29;30;31;32;33',
  //   created_at: '2018-09-13',
  //   updated_at: '2018-09-14',
  //   city: 'Grenoble',
  //   photos_accommodation: 'https://a0.muscache.com/im/pictures/10026423/540b7517_original.jpg?aki_policy=x_large',
  //   photos_accommodation1: 'https://a0.muscache.com/im/pictures/10026520/717f5adc_original.jpg?aki_policy=xx_large',
  //   photos_accommodation2: 'https://a0.muscache.com/im/pictures/10026455/6783fb9c_original.jpg?aki_policy=x_large',
  //   photos_accommodation3: 'https://a0.muscache.com/im/pictures/10026495/830df46f_original.jpg?aki_policy=x_large',
  //   commentaire_accommodation: 'Endroit très calme et reposant pour passer des vacances dans la nature et pas si loin d\'un lac et de belles villes',
  //   id_user: 3,
  //   photo_user:'https://a0.muscache.com/im/users/8749538/profile_pic/1429533104/original.jpg?aki_policy=profile_x_medium',
  //   first_name: 'Nathalie',
  //   name_type: 'Cabane',
  //   id_address: 5,
  // },
  // {
  //   id_accommodation: 2,
  //   title: 'Une yourte au calme en Savoie Bauge',
  //   price: 70,
  //   number_pieces: 1,
  //   number_bed: 6,
  //   description_accommodation:'Grande yourte de 50 m2 dans le massif des Bauges en Savoie. Calme en pleine nature. la vue est à 360° sur les montagnes baujus (Massif des Bauges). Nombreuses activités à proximité comme la randonnée, le VTT, l\'escalade, le ski. ',
  //   available: '25;26;28;29;30;31;33;35',
  //   created_at: '2018-09-13',
  //   updated_at: '2018-09-14',
  //   city: 'Jarsy',
  //   photos_accommodation: 'https://a0.muscache.com/im/pictures/10356334/a831e142_original.jpg?aki_policy=xx_large',
  //   photos_accommodation1: 'https://a0.muscache.com/im/pictures/10356396/88dbba65_original.jpg?aki_policy=x_large',
  //   photos_accommodation2: 'https://a0.muscache.com/im/pictures/10356443/8f34a71d_original.jpg?aki_policy=x_large',
  //   photos_accommodation3: 'https://a0.muscache.com/im/pictures/10356504/de1a95a5_original.jpg?aki_policy=x_large',
  //   commentaire_accommodation: 'un dépaysement total, le retour à la réalité parfois fait du bien l\'accueil par l\'amie de Jean-Luc fût sympathique QUE DU BONHEUR !!',
  //   id_user: 4,
  //   photo_user:'https://a0.muscache.com/im/pictures/user/d0b7e9e6-e6d7-4ba1-b38d-e54130dda866.jpg?aki_policy=profile_x_medium',
  //   first_name: 'Marc',
  //   name_type: 'Yourte',
  //   id_address: 6,
  // },
  // {
  //   id_accommodation: 3,
  //   title: 'Chaumière dans un écrin de nature',
  //   price: 53,
  //   number_pieces: 1,
  //   number_bed: 2,
  //   description_accommodation:'Charmante maisonnette en pierres, bois et chaume, blottie sur les pentes sud du Mont Mézenc, tout près du Gerbier de Jonc (source de la Loire), sur la commune de Borée en Ardèche à 8 minutes du domaine skiable des Estables.',
  //   available: '20;23;25;29;30;32;33;35',
  //   created_at: '2018-09-13',
  //   updated_at: '2018-09-14',
  //   city: 'Saint-Martial',
  //   photos_accommodation: 'https://a0.muscache.com/im/pictures/83694630/6b2018c3_original.jpg?aki_policy=xx_large',
  //   photos_accommodation1: 'https://a0.muscache.com/im/pictures/77438113/03fd3f15_original.jpg?aki_policy=x_large',
  //   photos_accommodation2: 'https://a0.muscache.com/im/pictures/77438250/3b092794_original.jpg?aki_policy=x_large',
  //   photos_accommodation3: 'https://a0.muscache.com/im/pictures/77438821/45010e1b_original.jpg?aki_policy=x_large',
  //   commentaire_accommodation: 'Site fabuleux et maisonnette de rêve ! Nathalie a été un hôte des plus sympathiques et attentionnés. Merci de nous avoir donné l\'occasion de passer de beaux moments dans la montagne ardéchoise !',
  //   id_user: 3,
  //   photo_user:'https://a0.muscache.com/im/users/8749538/profile_pic/1429533104/original.jpg?aki_policy=profile_x_medium',
  //   first_name: 'Nathalie',
  //   name_type: 'Maison',
  //   id_address: 7,
  // },
  // {
  //   id_accommodation: 4,
  //   title: 'Superbe maison dans la campagne',
  //   price: 55,
  //   number_pieces: 2,
  //   number_bed: 3,
  //   description_accommodation:'Si vous avez besoin de vous détendre ou tout simplement un point dappui, mais ne voulez pas vous faire manquer une promenade dans le parc ... eh bien, nous avons la solution pour vous!',
  //   available: '20;23;25;29;30;32;33;35',
  //   created_at: '2018-09-13',
  //   updated_at: '2018-09-14',
  //   city: 'Gourdon',
  //   photos_accommodation: 'https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=xx_large',
  //   photos_accommodation1: 'https://a0.muscache.com/im/pictures/ce5bfde8-5c79-4e62-befd-4270192b5125.jpg?aki_policy=xx_large',
  //   photos_accommodation2: 'https://a0.muscache.com/im/pictures/3db56785-640a-42b1-b8c2-b19acbaaf136.jpg?aki_policy=x_large',
  //   photos_accommodation3: 'https://a0.muscache.com/im/pictures/3e407e05-336f-4440-9633-c89c2f3420f5.jpg?aki_policy=x_large',
  //   commentaire_accommodation: 'Super séjour dans cette petite maison retirée à Gourdon. Antonio nous accueillis comme des rois et le dîner était magique !',
  //   id_user: 2,
  //   photo_user:'https://a0.muscache.com/im/users/2421788/profile_pic/1347394874/original.jpg?aki_policy=profile_x_medium',
  //   first_name: 'Jean-Luc',
  //   name_type: 'Maison',
  //   id_address: 8,
  // },
  // {
  //   id_accommodation: 5,
  //   title: 'Cabane champêtre',
  //   price: 42,
  //   number_pieces: 1,
  //   number_bed: 1,
  //   description_accommodation:'Si vous avez besoin de vous détendre ou tout simplement un point dappui, mais ne voulez pas vous faire manquer une promenade dans le parc ... eh bien, nous avons la solution pour vous!',
  //   available: '20;23;25;29;30;32;33;35',
  //   created_at: '2018-09-13',
  //   updated_at: '2018-09-14',
  //   city: 'Mont-de-Marsan',
  //   photos_accommodation: 'https://a0.muscache.com/im/pictures/bac0eb82-d9ba-4001-816e-e85860e71ae9.jpg?aki_policy=xx_large',
  //   photos_accommodation1: 'https://a0.muscache.com/im/pictures/39036146/d7b39b00_original.jpg?aki_policy=x_large',
  //   photos_accommodation2: 'https://a0.muscache.com/im/pictures/54423356/f3a097be_original.jpg?aki_policy=x_large',
  //   photos_accommodation3: 'https://a0.muscache.com/im/pictures/101936623/7fbb873f_original.jpg?aki_policy=x_large',
  //   commentaire_accommodation: 'Un super séjour, endroit cosy et très calme (pour les amateurs du calme ;)). Cadre verdoyant, paisible avec des hôtes discrets on reviendra certainement. Nous recommandons vivement!',
  //   id_user: 7,
  //   photo_user: 'string',
  //   first_name: 'DIDI',
  //   name_type: 'Cabane',
  //   id_address: 9,
  // },
  // {
  //   id_accommodation: 6,
  //   title: 'Cabane perchée du bois Mauret',
  //   price: 140,
  //   number_pieces: 2,
  //   number_bed: 3,
  //   description_accommodation:'Une nuit insolite dans une cabane perchée sur un magnifique sapin. Vue exceptionnelle sur les massifs du Vercors et du Dévoluy. Vous vivrez un moment inoubliable dans cette cabane isolée en montagne.',
  //   available: '20;23;25;29;30;32;33;35',
  //   created_at: '2018-09-13',
  //   updated_at: '2018-09-14',
  //   city: 'Dévoluy',
  //   photos_accommodation: 'https://a0.muscache.com/im/pictures/101936273/50064bc0_original.jpg?aki_policy=xx_large',
  //   photos_accommodation1: 'https://a0.muscache.com/im/pictures/10026520/717f5adc_original.jpg?aki_policy=xx_large',
  //   photos_accommodation2: 'https://a0.muscache.com/im/pictures/10026455/6783fb9c_original.jpg?aki_policy=x_large',
  //   photos_accommodation3: 'https://a0.muscache.com/im/pictures/10026495/830df46f_original.jpg?aki_policy=x_large',
  //   commentaire_accommodation: 'Cabane fort sympathique, moment de déconnexion avec le monde extérieur assuré. Nous avons été très bien accueillis, la bonne humeur au rdv !',
  //   id_user: 8,
  //   photo_user: 'string',
  //   first_name: 'Charles',
  //   name_type: 'Cabane',
  //   id_address: 10,
  // },
];

@Injectable({
  providedIn: 'root'
})
export class MockAccommodationsService {

  constructor() { }
}
