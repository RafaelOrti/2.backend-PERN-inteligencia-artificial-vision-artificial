'use strict'

module.exports = {
  // name,edad,apellido,email,nick
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        name: 'Shana',
        age: 61,
        surname: 'Cooke',
        email: 'lorem.ipsum@outlook.edu',
        password: 'sagittis.',
        nickname: 'congue.',
        createdAt: '2021-01-08 04:50:05',
        updatedAt: '2021-02-28 11:58:10'
      },
      {
        name: 'Uriel',
        age: 94,
        surname: 'Jensen',
        email: 'urna.nec.luctus@yahoo.edu',
        password: 'ante',
        nickname: 'vitae',
        createdAt: '2020-12-24 14:38:44',
        updatedAt: '2021-02-27 19:25:56'
      },
      {
        name: 'Caleb',
        age: 22,
        surname: 'Rosario',
        email: 'vitae.aliquet@yahoo.ca',
        password: 'libero.',
        nickname: 'mollis',
        createdAt: '2020-11-23 08:20:28',
        updatedAt: '2021-02-27 20:34:55'
      },
      {
        name: 'Sydney',
        age: 91,
        surname: 'Griffin',
        email: 'tempus.risus@yahoo.net',
        password: 'vitae',
        nickname: 'id,',
        createdAt: '2020-05-22 03:16:56',
        updatedAt: '2021-02-28 06:12:03'
      },
      {
        name: 'Nolan',
        age: 22,
        surname: 'Fitzgerald',
        email: 'eget@hotmail.com',
        password: 'ac,',
        nickname: 'Morbi',
        createdAt: '2020-04-30 15:26:14',
        updatedAt: '2021-03-01 00:54:56'
      },
      {
        name: 'Bradley',
        age: 5,
        surname: 'Schneider',
        email: 'nonummy.fusce@outlook.couk',
        password: 'neque',
        nickname: 'torquent',
        createdAt: '2020-12-03 22:27:40',
        updatedAt: '2021-02-28 18:53:37'
      },
      {
        name: 'Blossom',
        age: 29,
        surname: 'Maxwell',
        email: 'massa.non.ante@hotmail.org',
        password: 'eros.',
        nickname: 'dignissim',
        createdAt: '2020-07-01 18:35:47',
        updatedAt: '2021-02-28 04:01:08'
      },
      {
        name: 'Mufutau',
        age: 54,
        surname: 'Fitzpatrick',
        email: 'eu.tellus@protonmail.edu',
        password: 'augue',
        nickname: 'mi',
        createdAt: '2020-07-12 04:04:12',
        updatedAt: '2021-02-27 17:15:03'
      },
      {
        name: 'Raphael',
        age: 7,
        surname: 'Cruz',
        email: 'proin.dolor@yahoo.org',
        password: 'Aenean',
        nickname: 'accumsan',
        createdAt: '2020-09-03 23:57:48',
        updatedAt: '2021-02-28 21:19:49'
      },
      {
        name: 'Imogene',
        age: 82,
        surname: 'Oneil',
        email: 'enim.gravida@aol.edu',
        password: 'eget',
        nickname: 'eu',
        createdAt: '2020-11-14 11:26:27',
        updatedAt: '2021-02-27 18:54:53'
      },
      {
        name: 'Gretchen',
        age: 3,
        surname: 'Whitehead',
        email: 'vulputate@protonmail.ca',
        password: 'iaculis,',
        nickname: 'vehicula',
        createdAt: '2020-02-10 11:08:02',
        updatedAt: '2021-02-28 19:56:35'
      },
      {
        name: 'Colleen',
        age: 22,
        surname: 'Wheeler',
        email: 'dolor.fusce@outlook.couk',
        password: 'erat,',
        nickname: 'ac',
        createdAt: '2020-04-17 03:48:45',
        updatedAt: '2021-03-01 06:43:16'
      },
      {
        name: 'Ferris',
        age: 1,
        surname: 'Huber',
        email: 'feugiat@hotmail.couk',
        password: 'adipiscing',
        nickname: 'felis',
        createdAt: '2020-11-18 18:11:43',
        updatedAt: '2021-03-01 02:26:50'
      },
      {
        name: 'Heidi',
        age: 8,
        surname: 'Moore',
        email: 'tempor.diam.dictum@protonmail.org',
        password: 'natoque',
        nickname: 'feugiat.',
        createdAt: '2020-03-12 12:30:19',
        updatedAt: '2021-02-28 05:00:04'
      },
      {
        name: 'Ray',
        age: 68,
        surname: 'Mccullough',
        email: 'aliquam.eros@aol.com',
        password: 'dui.',
        nickname: 'eros',
        createdAt: '2020-12-06 20:07:30',
        updatedAt: '2021-02-28 01:42:44'
      },
      {
        name: 'Hilary',
        age: 39,
        surname: 'Le',
        email: 'urna@google.edu',
        password: 'nisl',
        nickname: 'bibendum.',
        createdAt: '2020-08-18 09:25:28',
        updatedAt: '2021-02-27 15:27:28'
      },
      {
        name: 'Hyacinth',
        age: 38,
        surname: 'Alford',
        email: 'sapien@outlook.net',
        password: 'nec',
        nickname: 'ante',
        createdAt: '2020-02-22 02:09:22',
        updatedAt: '2021-03-01 06:04:04'
      },
      {
        name: 'Leo',
        age: 96,
        surname: 'Mccormick',
        email: 'et.magnis@hotmail.couk',
        password: 'in,',
        nickname: 'adipiscing,',
        createdAt: '2020-10-13 15:02:11',
        updatedAt: '2021-02-28 05:14:11'
      },
      {
        name: 'Iona',
        age: 88,
        surname: 'Holt',
        email: 'maecenas.malesuada@google.ca',
        password: 'fringilla,',
        nickname: 'eleifend',
        createdAt: '2020-09-23 14:09:09',
        updatedAt: '2021-02-28 07:21:06'
      },
      {
        name: 'Orlando',
        age: 80,
        surname: 'Peterson',
        email: 'sed.eu.nibh@icloud.com',
        password: 'Donec',
        nickname: 'aliquam',
        createdAt: '2021-01-31 02:21:52',
        updatedAt: '2021-03-01 03:23:08'
      },
      {
        name: 'Carl',
        age: 74,
        surname: 'Chen',
        email: 'curabitur.sed@outlook.com',
        password: 'nisi.',
        nickname: 'eget',
        createdAt: '2020-04-19 10:31:33',
        updatedAt: '2021-02-27 21:10:37'
      },
      {
        name: 'Simone',
        age: 20,
        surname: 'Kirk',
        email: 'dui.nec@aol.edu',
        password: 'est',
        nickname: 'vitae',
        createdAt: '2021-01-25 01:26:00',
        updatedAt: '2021-03-01 09:28:49'
      },
      {
        name: 'Hamilton',
        age: 36,
        surname: 'Buck',
        email: 'arcu@protonmail.org',
        password: 'tellus.',
        nickname: 'nibh.',
        createdAt: '2020-05-14 10:26:04',
        updatedAt: '2021-02-27 16:40:48'
      },
      {
        name: 'Maggy',
        age: 92,
        surname: 'Holland',
        email: 'semper.egestas.urna@google.couk',
        password: 'sapien,',
        nickname: 'Morbi',
        createdAt: '2020-11-17 05:20:34',
        updatedAt: '2021-02-28 13:19:26'
      },
      {
        name: 'Mark',
        age: 2,
        surname: 'Duran',
        email: 'magnis.dis@protonmail.ca',
        password: 'lorem',
        nickname: 'lacus.',
        createdAt: '2020-09-07 17:01:55',
        updatedAt: '2021-02-28 16:06:54'
      },
      {
        name: 'Urielle',
        age: 17,
        surname: 'Barrett',
        email: 'gravida@google.edu',
        password: 'sit',
        nickname: 'egestas.',
        createdAt: '2020-10-17 08:08:55',
        updatedAt: '2021-02-28 09:27:56'
      },
      {
        name: 'Cameron',
        age: 58,
        surname: 'Hudson',
        email: 'massa.rutrum.magna@aol.com',
        password: 'Maecenas',
        nickname: 'sem',
        createdAt: '2020-10-29 11:19:31',
        updatedAt: '2021-02-27 21:52:21'
      },
      {
        name: 'Gareth',
        age: 85,
        surname: 'Pate',
        email: 'eget.lacus.mauris@hotmail.ca',
        password: 'erat',
        nickname: 'Fusce',
        createdAt: '2020-05-11 00:34:20',
        updatedAt: '2021-02-27 20:49:23'
      },
      {
        name: 'Allistair',
        age: 62,
        surname: 'Coleman',
        email: 'lorem.semper@aol.couk',
        password: 'ultrices.',
        nickname: 'lacus.',
        createdAt: '2020-09-23 08:42:06',
        updatedAt: '2021-02-28 05:04:44'
      },
      {
        name: 'Zoe',
        age: 14,
        surname: 'Hood',
        email: 'cursus.vestibulum.mauris@yahoo.ca',
        password: 'nibh',
        nickname: 'blandit.',
        createdAt: '2020-02-22 01:55:15',
        updatedAt: '2021-02-28 17:21:47'
      },
      {
        name: 'Rajah',
        age: 70,
        surname: 'Griffith',
        email: 'pede.cum@aol.couk',
        password: 'eros.',
        nickname: 'dis',
        createdAt: '2020-11-10 11:53:06',
        updatedAt: '2021-02-27 17:19:11'
      },
      {
        name: 'Bethany',
        age: 67,
        surname: 'Hart',
        email: 'tincidunt@hotmail.com',
        password: 'justo',
        nickname: 'at',
        createdAt: '2020-03-10 13:30:53',
        updatedAt: '2021-02-27 18:17:38'
      },
      {
        name: 'Cole',
        age: 35,
        surname: 'Silva',
        email: 'libero.integer@hotmail.edu',
        password: 'auctor.',
        nickname: 'enim.',
        createdAt: '2020-07-02 07:42:05',
        updatedAt: '2021-02-28 07:24:56'
      },
      {
        name: 'Len',
        age: 36,
        surname: 'Blackburn',
        email: 'lectus.justo.eu@aol.com',
        password: 'vestibulum',
        nickname: 'mi.',
        createdAt: '2020-02-08 21:20:24',
        updatedAt: '2021-02-27 19:09:46'
      },
      {
        name: 'Kerry',
        age: 72,
        surname: 'Ratliff',
        email: 'diam.sed@yahoo.couk',
        password: 'aliquet.',
        nickname: 'venenatis',
        createdAt: '2020-04-07 13:45:12',
        updatedAt: '2021-02-28 12:32:08'
      },
      {
        name: 'Violet',
        age: 48,
        surname: 'Flowers',
        email: 'tempor.augue@outlook.net',
        password: 'sed',
        nickname: 'faucibus',
        createdAt: '2020-10-01 05:03:14',
        updatedAt: '2021-02-28 15:56:56'
      },
      {
        name: 'Helen',
        age: 61,
        surname: 'Anthony',
        email: 'est.tempor@icloud.net',
        password: 'neque',
        nickname: 'nascetur',
        createdAt: '2020-09-12 01:35:08',
        updatedAt: '2021-02-28 10:52:10'
      },
      {
        name: 'Rina',
        age: 15,
        surname: 'Keller',
        email: 'morbi.tristique@yahoo.ca',
        password: 'molestie',
        nickname: 'justo.',
        createdAt: '2021-01-16 01:19:52',
        updatedAt: '2021-02-28 00:22:31'
      },
      {
        name: 'Georgia',
        age: 24,
        surname: 'Bradshaw',
        email: 'nulla@icloud.ca',
        password: 'enim,',
        nickname: 'consectetuer',
        createdAt: '2020-04-23 08:09:15',
        updatedAt: '2021-02-28 14:00:36'
      },
      {
        name: 'Forrest',
        age: 89,
        surname: 'Dennis',
        email: 'arcu.aliquam@aol.edu',
        password: 'penatibus',
        nickname: 'parturient',
        createdAt: '2020-05-08 06:41:25',
        updatedAt: '2021-02-28 05:47:35'
      },
      {
        name: 'Shelley',
        age: 97,
        surname: 'Reeves',
        email: 'pharetra.quisque@hotmail.net',
        password: 'sodales',
        nickname: 'a,',
        createdAt: '2020-04-21 13:50:05',
        updatedAt: '2021-03-01 05:17:02'
      },
      {
        name: 'Mercedes',
        age: 7,
        surname: 'Graves',
        email: 'dolor.sit@icloud.couk',
        password: 'lobortis.',
        nickname: 'lectus.',
        createdAt: '2020-08-15 20:59:36',
        updatedAt: '2021-03-01 12:16:08'
      },
      {
        name: 'Cameron',
        age: 64,
        surname: 'Sharpe',
        email: 'fermentum.metus@google.org',
        password: 'id,',
        nickname: 'Cras',
        createdAt: '2020-06-20 18:42:48',
        updatedAt: '2021-03-01 11:26:34'
      },
      {
        name: 'Quail',
        age: 26,
        surname: 'Barker',
        email: 'donec.at.arcu@icloud.net',
        password: 'quam',
        nickname: 'eleifend',
        createdAt: '2021-01-29 01:23:39',
        updatedAt: '2021-02-28 21:06:45'
      },
      {
        name: 'Geraldine',
        age: 15,
        surname: 'Schwartz',
        email: 'ipsum@aol.edu',
        password: 'Donec',
        nickname: 'rhoncus',
        createdAt: '2020-05-13 13:06:38',
        updatedAt: '2021-02-27 22:52:11'
      },
      {
        name: 'Ulysses',
        age: 27,
        surname: 'Stevenson',
        email: 'fringilla.porttitor@aol.ca',
        password: 'mi',
        nickname: 'interdum',
        createdAt: '2020-02-26 02:12:19',
        updatedAt: '2021-02-27 16:48:03'
      },
      {
        name: 'Gil',
        age: 32,
        surname: 'Walter',
        email: 'aliquam.ornare@icloud.org',
        password: 'habitant',
        nickname: 'tortor',
        createdAt: '2020-06-30 20:58:28',
        updatedAt: '2021-03-01 11:13:04'
      },
      {
        name: 'Barrett',
        age: 72,
        surname: 'Miles',
        email: 'lacinia.vitae.sodales@google.net',
        password: 'Pellentesque',
        nickname: 'rutrum',
        createdAt: '2020-10-03 14:33:42',
        updatedAt: '2021-02-28 00:13:42'
      },
      {
        name: 'Nash',
        age: 43,
        surname: 'Glenn',
        email: 'sit.amet.luctus@protonmail.couk',
        password: 'Nulla',
        nickname: 'vitae',
        createdAt: '2020-11-26 01:35:52',
        updatedAt: '2021-02-28 10:55:15'
      },
      {
        name: 'Brody',
        age: 93,
        surname: 'Mcfarland',
        email: 'iaculis@outlook.com',
        password: 'massa.',
        nickname: 'nunc',
        createdAt: '2020-03-26 16:29:10',
        updatedAt: '2021-02-28 09:56:06'
      },
      {
        name: 'Jasper',
        age: 60,
        surname: 'Berger',
        email: 'nonummy.ac@protonmail.com',
        password: 'Lorem',
        nickname: 'iaculis',
        createdAt: '2020-11-10 11:09:45',
        updatedAt: '2021-02-28 07:29:17'
      },
      {
        name: 'Giacomo',
        age: 37,
        surname: 'Bailey',
        email: 'faucibus.orci@google.edu',
        password: 'mollis.',
        nickname: 'Fusce',
        createdAt: '2020-07-14 15:52:03',
        updatedAt: '2021-02-28 08:30:23'
      },
      {
        name: 'Robert',
        age: 6,
        surname: 'Griffith',
        email: 'commodo.ipsum@hotmail.com',
        password: 'nibh',
        nickname: 'enim',
        createdAt: '2020-05-26 17:57:28',
        updatedAt: '2021-03-01 10:21:34'
      },
      {
        name: 'Kermit',
        age: 67,
        surname: 'Camacho',
        email: 'donec@hotmail.couk',
        password: 'in,',
        nickname: 'sapien.',
        createdAt: '2020-07-07 13:43:44',
        updatedAt: '2021-03-01 04:43:31'
      },
      {
        name: 'Colby',
        age: 99,
        surname: 'Eaton',
        email: 'id.blandit@outlook.com',
        password: 'ut',
        nickname: 'elit',
        createdAt: '2020-09-28 10:09:39',
        updatedAt: '2021-02-28 22:32:58'
      },
      {
        name: 'Dillon',
        age: 39,
        surname: 'Dixon',
        email: 'sodales.nisi.magna@aol.net',
        password: 'eleifend',
        nickname: 'Suspendisse',
        createdAt: '2020-07-19 00:36:08',
        updatedAt: '2021-02-27 20:52:54'
      },
      {
        name: 'Irene',
        age: 39,
        surname: 'Delgado',
        email: 'odio.aliquam.vulputate@hotmail.com',
        password: 'aliquam,',
        nickname: 'libero',
        createdAt: '2020-10-09 03:02:04',
        updatedAt: '2021-03-01 02:49:47'
      },
      {
        name: 'Derek',
        age: 44,
        surname: 'Morgan',
        email: 'aliquet.phasellus.fermentum@google.ca',
        password: 'Nunc',
        nickname: 'sit',
        createdAt: '2020-03-21 13:41:27',
        updatedAt: '2021-02-28 18:46:10'
      },
      {
        name: 'Ray',
        age: 52,
        surname: 'Ayala',
        email: 'tristique.aliquet.phasellus@aol.ca',
        password: 'neque',
        nickname: 'Donec',
        createdAt: '2020-09-29 08:51:39',
        updatedAt: '2021-03-01 12:27:44'
      },
      {
        name: 'Cyrus',
        age: 88,
        surname: 'Jenkins',
        email: 'dictum.eu@aol.couk',
        password: 'orci',
        nickname: 'a',
        createdAt: '2020-07-17 03:29:44',
        updatedAt: '2021-03-01 12:46:59'
      },
      {
        name: 'Hayley',
        age: 56,
        surname: 'Eaton',
        email: 'aliquet.proin@icloud.ca',
        password: 'purus',
        nickname: 'Fusce',
        createdAt: '2020-11-28 19:39:00',
        updatedAt: '2021-02-28 15:41:06'
      },
      {
        name: 'Keith',
        age: 48,
        surname: 'Woodward',
        email: 'cras.eget@google.ca',
        password: 'ipsum',
        nickname: 'Lorem',
        createdAt: '2021-01-25 22:28:57',
        updatedAt: '2021-03-01 11:26:01'
      },
      {
        name: 'Alma',
        age: 47,
        surname: 'Spencer',
        email: 'metus.in.nec@hotmail.net',
        password: 'ridiculus',
        nickname: 'id',
        createdAt: '2020-03-02 03:59:50',
        updatedAt: '2021-02-27 18:19:31'
      },
      {
        name: 'Whitney',
        age: 90,
        surname: 'Maynard',
        email: 'sociosqu.ad@hotmail.org',
        password: 'Cum',
        nickname: 'bibendum.',
        createdAt: '2020-02-20 18:42:25',
        updatedAt: '2021-03-01 01:52:42'
      },
      {
        name: 'Eagan',
        age: 17,
        surname: 'Coleman',
        email: 'donec.egestas.aliquam@yahoo.net',
        password: 'natoque',
        nickname: 'in',
        createdAt: '2020-07-04 00:15:07',
        updatedAt: '2021-02-28 01:59:59'
      },
      {
        name: 'Hollee',
        age: 57,
        surname: 'Head',
        email: 'arcu@google.couk',
        password: 'velit.',
        nickname: 'erat.',
        createdAt: '2020-09-17 05:56:21',
        updatedAt: '2021-02-28 09:40:56'
      },
      {
        name: 'Alden',
        age: 83,
        surname: 'Franco',
        email: 'nisl.quisque.fringilla@hotmail.com',
        password: 'tortor.',
        nickname: 'sem',
        createdAt: '2020-07-17 19:23:22',
        updatedAt: '2021-03-01 01:03:39'
      },
      {
        name: 'Jamal',
        age: 94,
        surname: 'Olson',
        email: 'fermentum@yahoo.com',
        password: 'eget,',
        nickname: 'lectus',
        createdAt: '2020-06-16 05:01:16',
        updatedAt: '2021-02-28 18:48:19'
      },
      {
        name: 'Nevada',
        age: 48,
        surname: 'Cook',
        email: 'at.libero.morbi@hotmail.ca',
        password: 'ante.',
        nickname: 'dui.',
        createdAt: '2020-03-29 06:47:58',
        updatedAt: '2021-03-01 01:44:29'
      },
      {
        name: 'Mohammad',
        age: 98,
        surname: 'Quinn',
        email: 'sit.amet.consectetuer@icloud.edu',
        password: 'nonummy',
        nickname: 'nisl',
        createdAt: '2020-03-06 08:47:41',
        updatedAt: '2021-02-27 23:54:32'
      },
      {
        name: 'Sawyer',
        age: 3,
        surname: 'Robbins',
        email: 'odio.vel@icloud.ca',
        password: 'Cum',
        nickname: 'massa.',
        createdAt: '2020-04-29 03:21:26',
        updatedAt: '2021-03-01 08:37:00'
      },
      {
        name: 'Julian',
        age: 28,
        surname: 'Foster',
        email: 'nec@outlook.edu',
        password: 'orci,',
        nickname: 'iaculis',
        createdAt: '2020-11-17 17:04:13',
        updatedAt: '2021-03-01 11:16:48'
      },
      {
        name: 'Dacey',
        age: 72,
        surname: 'Calderon',
        email: 'pharetra.quisque@protonmail.com',
        password: 'amet',
        nickname: 'a',
        createdAt: '2020-07-15 17:09:44',
        updatedAt: '2021-03-01 07:13:43'
      },
      {
        name: 'Ruth',
        age: 32,
        surname: 'Le',
        email: 'placerat@hotmail.ca',
        password: 'lectus.',
        nickname: 'lorem',
        createdAt: '2020-09-24 20:39:33',
        updatedAt: '2021-02-27 22:26:40'
      },
      {
        name: 'Danielle',
        age: 27,
        surname: 'Hawkins',
        email: 'diam@icloud.ca',
        password: 'ipsum',
        nickname: 'suscipit',
        createdAt: '2021-01-28 19:13:51',
        updatedAt: '2021-02-27 21:41:43'
      },
      {
        name: 'Erin',
        age: 48,
        surname: 'Rivera',
        email: 'dolor.sit@yahoo.com',
        password: 'Maecenas',
        nickname: 'elementum',
        createdAt: '2020-02-20 15:16:50',
        updatedAt: '2021-03-01 06:21:20'
      },
      {
        name: 'Calista',
        age: 85,
        surname: 'Fields',
        email: 'placerat@protonmail.couk',
        password: 'sollicitudin',
        nickname: 'pede',
        createdAt: '2021-01-12 21:11:31',
        updatedAt: '2021-02-28 17:24:37'
      },
      {
        name: 'Aurelia',
        age: 69,
        surname: 'Hendrix',
        email: 'elit@hotmail.couk',
        password: 'sed',
        nickname: 'sem',
        createdAt: '2020-10-22 15:57:55',
        updatedAt: '2021-02-27 19:55:30'
      },
      {
        name: 'Gannon',
        age: 21,
        surname: 'Frazier',
        email: 'fringilla.donec@protonmail.edu',
        password: 'consectetuer',
        nickname: 'massa.',
        createdAt: '2020-05-28 09:10:40',
        updatedAt: '2021-02-28 10:44:20'
      },
      {
        name: 'Kalia',
        age: 3,
        surname: 'Franks',
        email: 'orci.lacus@protonmail.edu',
        password: 'magna',
        nickname: 'nec',
        createdAt: '2021-01-09 01:23:06',
        updatedAt: '2021-02-27 15:35:35'
      },
      {
        name: 'Kyla',
        age: 16,
        surname: 'Mcclure',
        email: 'tellus.faucibus@yahoo.com',
        password: 'metus.',
        nickname: 'ut',
        createdAt: '2020-04-15 20:01:07',
        updatedAt: '2021-03-01 13:56:43'
      },
      {
        name: 'Melvin',
        age: 54,
        surname: 'Church',
        email: 'etiam.imperdiet.dictum@icloud.com',
        password: 'tortor',
        nickname: 'imperdiet',
        createdAt: '2020-11-27 14:39:16',
        updatedAt: '2021-03-01 12:01:19'
      },
      {
        name: 'Maite',
        age: 34,
        surname: 'Pratt',
        email: 'adipiscing@yahoo.com',
        password: 'arcu',
        nickname: 'ornare.',
        createdAt: '2020-06-22 17:49:46',
        updatedAt: '2021-03-01 03:40:34'
      },
      {
        name: 'Xaviera',
        age: 72,
        surname: 'Ingram',
        email: 'nec@outlook.ca',
        password: 'Aliquam',
        nickname: 'Cras',
        createdAt: '2020-10-12 02:23:15',
        updatedAt: '2021-03-01 13:19:48'
      },
      {
        name: 'Colin',
        age: 73,
        surname: 'Melton',
        email: 'tempus.non@icloud.edu',
        password: 'neque',
        nickname: 'Etiam',
        createdAt: '2020-07-30 06:20:49',
        updatedAt: '2021-02-28 21:11:33'
      },
      {
        name: 'Neil',
        age: 38,
        surname: 'Velez',
        email: 'nisl.sem@outlook.edu',
        password: 'velit.',
        nickname: 'ornare',
        createdAt: '2020-05-05 08:11:21',
        updatedAt: '2021-02-28 19:41:41'
      },
      {
        name: 'Magee',
        age: 26,
        surname: 'Calderon',
        email: 'sed.dolor.fusce@google.couk',
        password: 'vulputate,',
        nickname: 'non',
        createdAt: '2020-05-11 15:49:14',
        updatedAt: '2021-02-28 11:51:38'
      },
      {
        name: 'Maryam',
        age: 45,
        surname: 'Gilliam',
        email: 'lacinia.at@yahoo.edu',
        password: 'in',
        nickname: 'risus',
        createdAt: '2020-10-13 01:52:30',
        updatedAt: '2021-02-28 18:38:49'
      },
      {
        name: 'Nichole',
        age: 97,
        surname: 'Bowen',
        email: 'elit.sed@icloud.net',
        password: 'erat.',
        nickname: 'Curabitur',
        createdAt: '2020-07-03 02:50:28',
        updatedAt: '2021-02-28 18:26:17'
      },
      {
        name: 'Nell',
        age: 37,
        surname: 'Patrick',
        email: 'quis.pede@outlook.com',
        password: 'mauris,',
        nickname: 'sed',
        createdAt: '2020-08-07 22:56:11',
        updatedAt: '2021-02-27 14:53:37'
      },
      {
        name: 'Moses',
        age: 37,
        surname: 'Cotton',
        email: 'varius.ultrices@outlook.net',
        password: 'Fusce',
        nickname: 'elementum',
        createdAt: '2020-04-30 02:55:34',
        updatedAt: '2021-03-01 08:17:29'
      },
      {
        name: 'Melodie',
        age: 92,
        surname: 'Howell',
        email: 'aliquam.vulputate@outlook.com',
        password: 'commodo',
        nickname: 'amet',
        createdAt: '2020-10-20 07:58:24',
        updatedAt: '2021-02-28 03:38:40'
      },
      {
        name: 'Destiny',
        age: 84,
        surname: 'Church',
        email: 'eros@hotmail.net',
        password: 'Donec',
        nickname: 'lectus,',
        createdAt: '2020-04-17 14:43:03',
        updatedAt: '2021-03-01 08:41:01'
      },
      {
        name: 'Samuel',
        age: 64,
        surname: 'Vang',
        email: 'eget.massa@icloud.edu',
        password: 'tempus',
        nickname: 'Integer',
        createdAt: '2020-06-25 21:42:18',
        updatedAt: '2021-03-01 08:38:10'
      },
      {
        name: 'George',
        age: 19,
        surname: 'Riggs',
        email: 'a.feugiat@icloud.couk',
        password: 'senectus',
        nickname: 'egestas',
        createdAt: '2020-06-01 02:14:34',
        updatedAt: '2021-03-01 07:14:47'
      },
      {
        name: 'Athena',
        age: 70,
        surname: 'Clay',
        email: 'mi.tempor.lorem@icloud.couk',
        password: 'lacus,',
        nickname: 'sapien',
        createdAt: '2020-06-19 14:18:00',
        updatedAt: '2021-02-27 21:32:57'
      },
      {
        name: 'Georgia',
        age: 44,
        surname: 'Joseph',
        email: 'lorem.semper@yahoo.com',
        password: 'sed',
        nickname: 'semper',
        createdAt: '2020-04-16 16:46:57',
        updatedAt: '2021-02-27 17:00:32'
      },
      {
        name: 'Rhoda',
        age: 74,
        surname: 'Stevens',
        email: 'sem.ut@yahoo.net',
        password: 'ultrices',
        nickname: 'Proin',
        createdAt: '2020-08-11 05:21:31',
        updatedAt: '2021-03-01 11:50:21'
      },
      {
        name: 'Lareina',
        age: 69,
        surname: 'Hurst',
        email: 'enim.nec@hotmail.couk',
        password: 'turpis',
        nickname: 'vitae',
        createdAt: '2020-02-11 15:04:53',
        updatedAt: '2021-03-01 09:56:26'
      },
      {
        name: 'Kamal',
        age: 8,
        surname: "O'connor",
        email: 'pretium.neque.morbi@google.couk',
        password: 'placerat,',
        nickname: 'ac',
        createdAt: '2020-08-04 16:28:44',
        updatedAt: '2021-02-28 10:16:48'
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
