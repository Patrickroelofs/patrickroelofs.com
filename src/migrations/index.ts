import * as migration_20250212_204811 from './20250212_204811';
import * as migration_20250212_210754 from './20250212_210754';
import * as migration_20250212_214845 from './20250212_214845';
import * as migration_20250212_215414 from './20250212_215414';
import * as migration_20250213_152749 from './20250213_152749';
import * as migration_20250213_204928 from './20250213_204928';
import * as migration_20250213_213951 from './20250213_213951';

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
    name: '20250212_215414',
  },
  {
    up: migration_20250213_152749.up,
    down: migration_20250213_152749.down,
    name: '20250213_152749',
  },
  {
    up: migration_20250213_204928.up,
    down: migration_20250213_204928.down,
    name: '20250213_204928',
  },
  {
    up: migration_20250213_213951.up,
    down: migration_20250213_213951.down,
    name: '20250213_213951'
  },
];
