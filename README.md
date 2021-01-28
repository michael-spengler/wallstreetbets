<img src="https://user-images.githubusercontent.com/43786652/106076415-cad08900-610f-11eb-9976-e21c8a335ad6.jpg" alt="drawing" width="200"/>


# wallstreetbets
This package connects your deno programs to the wallstreetbets subreddit (https://www.reddit.com/r/wallstreetbets/ resp. https://t.me/WallStreetBetsReddit).

Some of the features of https://www.npmjs.com/package/decentralized-finance-defi could be copied to this Deno module as soon as the corresponding libraries ... are ready for Deno.

This package is in draft mode. Feel free to contribute.

## usage examples
```ts
import { WallStreetBetsService } from 'https://deno.land/x/wallstreetbets/src/wallstreetbets.service.ts'

const wallstreetBetsService = new WallStreetBetsService()

const currentRecommendation = wallstreetBetsService.getCurrentInvestmentRecommendation()

console.log(`This module is under construction: Example ISIN recommendation: ${currentRecommendation.ISIN}`)

```

## test it via your console
```ts
deno run 'https://deno.land/x/wallstreetbets/test-it.ts'
```

## future features
This module will be enhanced by deep learning capabilities as soon as https://deno.land/x/neural_nets is ready for it.


## philosophy
This package shall increase freedom for those who increase freedom. Actions of the weak shall be private. Actions of the powerful shall be transparent.


