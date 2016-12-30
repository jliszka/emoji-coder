
const greens = [':eight_spoked_asterisk:', ':sparkle:', ':chart:', ':u6307:'];
const blues = [':sa:', ':passport_control:', ':baggage_claim:', ':left_luggage:', ':potable_water:', ':mens:'];
const purples = [':aries:', ':taurus:', ':gemini:', ':cancer:', ':leo:', ':virgo:', ':libra:', ':scorpius:', ':sagittarius:', ':capricorn:', ':aquarius:', ':pisces:'];
const oranges = [':radioactive_sign:', ':biohazard_sign', ':vibration_mode:', ':u6709:', ':u7121:', ':u7533:', ':u55b6:', ':u6708:', ':eight_pointed_black_star:'];
const reds = [':u5408:', ':u6e80:', ':u6e80:', ':u7981:'];

const targetGrids = [
  // Moving around
  {
    name: blues[0],
    grid: [
      [':pineapple:', ':banana:']
    ]
  },
  {
    name: blues[1],
    grid: [
      [':chicken:'], [':monkey_face:'], [':panda_face:']
    ]
  },
  {
    name: blues[5],
    grid: [
      [':chicken:'], [':monkey_face:'], [':panda_face:', ':bee:', ':snowman:'],
    ]
  },
  {
    name: blues[2],
    grid: [
      [':watermelon:', ':pizza:'], [':grapes:',':strawberry:']
    ]
  },
  {
    name: blues[3],
    grid: [
      [':watermelon:'], [null, ':strawberry:'], [null, null, ':cheese_wedge:']
    ]
  },
  {
    name: blues[4],
    grid: [
      [':watermelon:', null, null, null, ':watermelon:'],
      [null, ':strawberry:', null, ':strawberry:'],
      [null, null, ':cheese_wedge:']
    ]
  },
  // Repeats
  {
    name: purples[0],
    grid: [
      [':jack_o_lantern:', ':robot_face:', ':jack_o_lantern:', ':robot_face:']
    ]
  },
  {
    name: purples[1],
    grid: [
      [':jack_o_lantern:', ':robot_face:', ':jack_o_lantern:', ':robot_face:', ':jack_o_lantern:', ':robot_face:']
    ]
  },
  {
    name: purples[2],
    grid: [
      [':jack_o_lantern:', ':robot_face:', ':football:', ':jack_o_lantern:', ':robot_face:', ':football:']
    ]
  },
  {
    name: purples[3],
    grid: [
      [':dancer:'], [':evergreen_tree:'], [':snowman:'], [':dancer:'], [':evergreen_tree:'], [':snowman:'],
    ]
  },
  {
    name: purples[4],
    grid: [
      [':evergreen_tree:'], [null, ':snowman:'], [null, null, ':evergreen_tree:'], [null, null, null, ':snowman:'],
    ]
  },
  {
    name: purples[5],
    grid: [
      [':jack_o_lantern:', ':robot_face:', ':football:', ':jack_o_lantern:', ':robot_face:', ':football:', ':jack_o_lantern:', ':robot_face:', ':football:']
    ]
  },
  {
    name: purples[6],
    grid: [
      [':jack_o_lantern:', ':robot_face:', ':football:'],
      [null, null, null, ':jack_o_lantern:', ':robot_face:', ':football:'],
      [null, null, null, null, null, null, ':jack_o_lantern:', ':robot_face:', ':football:']
    ]
  },
  {
    name: purples[7],
    grid: [
      [':jack_o_lantern:', ':robot_face:', ':football:'],
      [null, null, ':jack_o_lantern:', ':robot_face:', ':football:'],
      [null, null, null, null, ':jack_o_lantern:', ':robot_face:', ':football:']
    ]
  },
  {
    name: purples[8],
    grid: [
      [':jack_o_lantern:', ':robot_face:', ':football:'],
      [':jack_o_lantern:', ':robot_face:', ':football:'],
      [':jack_o_lantern:', ':robot_face:', ':football:']
    ]
  },
  {
    name: purples[9],
    grid: [
      [':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:',
       ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:' ]
    ]
  },
  {
    name: purples[10],
    grid: [
      [':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:',
       ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:' ]
    ]
  },
  {
    name: purples[11],
    grid: [
      [':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:',
       ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:' ],
      [':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:',
       ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:', ':large_blue_circle:', ':red_circle:' ]
    ]
  },
];

export default targetGrids;
