exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{
					id: 1,
					name: 'Steve Rogers',
					email: 'cptamerica@gmail.com',
					username: 'Steve',
					password: 'pepper',
					role: 'Avenger'
				},
				{
					id: 2,
					name: 'Wanda Maximoff',
					email: 'scarwitch@gmail.com',
					username: 'Scarlet Witch',
					password: 'salt',
					role: 'Averger'
				},
				{
					id: 3,
					name: 'Hulk',
					email: 'gammaman@gmail.com',
					username: 'hulk',
					password: 'smash',
					role: 'Avenger'
				}
			])
		})
}
