import * as migration_20250212_204811 from './20250212_204811';
import * as migration_20250212_210754 from './20250212_210754';
import * as migration_20250212_214845 from './20250212_214845';
import * as migration_20250212_215414 from './20250212_215414';

export const migrations = [
  {
    up: migration_20250212_204811.up,
    down: migration_20250212_204811.down,
    name: '20250212_204811',
  },
  {
    up: migration_20250212_210754.up,
    down: migration_20250212_210754.down,
    name: '20250212_210754',
  },
  {
    up: migration_20250212_214845.up,
    down: migration_20250212_214845.down,
    name: '20250212_214845',
  },
  {
    up: migration_20250212_215414.up,
    down: migration_20250212_215414.down,
    name: '20250212_215414'
  },
];
