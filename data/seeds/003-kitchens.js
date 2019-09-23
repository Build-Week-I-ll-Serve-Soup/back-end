exports.seed = function(knex) {
	return knex('kitchens')
		.delete()
		.then(function() {
			return knex('kitchens').insert([
				{
					kit_name: 'Second Helpings',
					city: 'Indianapolis',
					website: 'https://www.secondhelpings.org/'
				},
				{
					kit_name: 'Holy Apostles Soup Kitchen',
					city: 'New York',
					website: 'https://holyapostlessoupkitchen.org/'
				},
				{
					kit_name: 'St. Joe’s Soup Kitchen',
					city: 'New York',
					website: 'http://sjsk.nyc/'
				},
				{
					kit_name: 'Capuchin Soup Kitchen',
					city: 'Detroit',
					website: 'https://cskdetroit.org/'
				},
				{
					kit_name: 'All Saints Soup Kitchen and Food Pantry',
					city: 'Detroit',
					website: 'https://ccsem.org/'
				},
				{
					kit_name: 'Open Hand Atlanta',
					city: 'Atlanta',
					website: 'https://openhandatlanta.org/'
				}
			])
		})
}
