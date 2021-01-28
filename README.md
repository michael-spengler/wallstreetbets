# wallstreetbets
This package is inspired by https://www.reddit.com/r/wallstreetbets/ and by https://t.me/WallStreetBetsReddit.
## usage examples
```ts
import { WallStreetBetsService } from './src/wallstreetbets.service'

const wallstreetBetsService = new WallStreetBetsService()

const currentRecommendation = wallstreetBetsService.getCurrentInvestmentRecommendation()

console.log(currentRecommendation.ISIN)

```

## future features
This module will be enhanced by deep learning capabilities as soon as https://deno.land/x/neural_nets is ready for it.


## philosophy
This package shall increase freedom for those who increase freedom. Actions of the weak shall be private. Actions of the powerful shall be transparent.


