
const books = [':closed_book:', ':green_book:', ':blue_book:', ':orange_book:'];

export default [
	{
		// Moving around
		name: books[0],
		puzzles: [
			{
				lines: [[':pineapple:', 'rt', ':banana:']],
		    grid: [
		      [':pineapple:', ':banana:']
		    ]
		  },
		  {
		    grid: [
		      [':chicken:'], [':monkey_face:'], [':panda_face:']
		    ]
		  },
		  {
		    grid: [
		      [':chicken:'], [':monkey_face:'], [':panda_face:', ':bee:', ':snowman:'],
		    ]
		  },
		  {
		    grid: [
		      [':watermelon:', ':pizza:'], [':grapes:',':strawberry:']
		    ]
		  },
		  {
		    grid: [
		      [':watermelon:'], [null, ':strawberry:'], [null, null, ':cheese_wedge:']
		    ]
		  },
		  {
		    grid: [
		      [':watermelon:', null, null, null, ':watermelon:'],
		      [null, ':strawberry:', null, ':strawberry:'],
		      [null, null, ':cheese_wedge:']
		    ]
		  }
		]
	},

	{
		// Editing
		name: books[1],
		puzzles: [
		  {
		  	lines: [[':watermelon:', 'rt', ':strawberry:', 'rt', ':cheese_wedge:']],
		    grid: [
		      [':watermelon:', ':strawberry:', ':cheese_wedge:']
		    ]
		  },
		  {
		    grid: [
		      [':watermelon:', ':strawberry:', ':grapes:']
		    ]
		  },
		  {
		    grid: [
		      [':watermelon:', ':bee:', ':grapes:']
		    ]
		  },
		  {
		    grid: [
		      [':watermelon:', ':bee:', null, ':grapes:']
		    ]
		  },
		  {
		    grid: [
		      [':watermelon:', ':bee:'],
		      [null, null, ':grapes:']
		    ]
		  },
		  {
		    grid: [
		      [':panda_face:', ':bee:'],
		      [null, null, ':grapes:']
		    ]
		  },
		  {
		    grid: [
		      [':panda_face:', null, ':bee:'],
		      [null, null, null, ':grapes:']
		    ]
		  },
		  {
		    grid: [
		      [':panda_face:'],
		      [null, null, ':bee:'],
		      [null, null, null, ':grapes:']
		    ]
		  },
		]
	},

	{
		// Repeats
		name: books[2],
		puzzles: [
		  {
		  	lines: [[':jack_o_lantern:', 'rt', ':robot_face:', 'rt', 'rp', 2]],
		    grid: [
		      [':jack_o_lantern:', ':robot_face:', ':jack_o_lantern:', ':robot_face:']
		    ]
		  },
		  {
		    grid: [
		      [':jack_o_lantern:', ':robot_face:', ':jack_o_lantern:', ':robot_face:', ':jack_o_lantern:', ':robot_face:']
		    ]
		  },
		  {
		    grid: [
		      [':jack_o_lantern:', ':robot_face:', ':football:', ':jack_o_lantern:', ':robot_face:', ':football:']
		    ]
		  },
		  {
		    grid: [
		      [':evergreen_tree:'], [':snowman:'], [':evergreen_tree:'], [':snowman:'], [':evergreen_tree:'], [':snowman:']
		    ]
		  },
		  {
		    grid: [
		      [':evergreen_tree:'], [null, ':snowman:'], [null, null, ':evergreen_tree:'], [null, null, null, ':snowman:'],
		    ]
		  },
		  {
		    grid: [
		      [':jack_o_lantern:', ':robot_face:', ':football:', ':jack_o_lantern:', ':robot_face:', ':football:', ':jack_o_lantern:', ':robot_face:', ':football:']
		    ]
		  },
		  {
		    grid: [
		      [':jack_o_lantern:', ':robot_face:', ':football:'],
		      [null, null, null, ':jack_o_lantern:', ':robot_face:', ':football:'],
		      [null, null, null, null, null, null, ':jack_o_lantern:', ':robot_face:', ':football:']
		    ]
		  },
		  {
		    grid: [
		      [':jack_o_lantern:', ':robot_face:', ':football:'],
		      [null, null, ':jack_o_lantern:', ':robot_face:', ':football:'],
		      [null, null, null, null, ':jack_o_lantern:', ':robot_face:', ':football:']
		    ]
		  },
		  {
		    grid: [
		      [':jack_o_lantern:', ':robot_face:', ':football:'],
		      [':jack_o_lantern:', ':robot_face:', ':football:'],
		      [':jack_o_lantern:', ':robot_face:', ':football:']
		    ]
		  },
		  {
		    grid: [
		      [':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:',
		       ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:' ]
		    ]
		  },
		  {
		    grid: [
		      [':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:',
		       ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:' ]
		    ]
		  },
		  {
		    grid: [
		      [':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:',
		       ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:' ],
		      [':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:',
		       ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:' ]
		    ]
		  }
		]
	},

	{
  	// Multiple repeats
		name: books[3],
		puzzles: [
		  {
		    grid: [
		      [':heart:', ':blue_heart:', ':heart:', ':blue_heart:', ':heart:', ':blue_heart:' ],
		      [':smile:', ':slightly_frowning_face:', ':smile:', ':slightly_frowning_face:', ':smile:', ':slightly_frowning_face:' ]
		    ]
		  }
		]
	}
]

