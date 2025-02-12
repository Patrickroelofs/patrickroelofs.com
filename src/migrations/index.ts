import * as migration_20250212_204811 from './20250212_204811';
import * as migration_20250212_210754 from './20250212_210754';

export const migrations = [
  {
    up: migration_20250212_204811.up,
    down: migration_20250212_204811.down,
    name: '20250212_204811',
  },
  {
    up: migration_20250212_210754.up,
    down: migration_20250212_210754.down,
    name: '20250212_210754'
  },
];
