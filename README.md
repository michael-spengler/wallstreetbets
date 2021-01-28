**Powered By**  

[<img src="https://raw.githubusercontent.com/michael-spengler/decentralized-finance/main/logo-v2.svg" alt="drawing" width="200"/>](https://www.npmjs.com/package/decentralized-finance-defi)


# wallstreetbets - under construction - just drafts
This package connects your deno programs to the wallstreetbets subreddit (https://www.reddit.com/r/wallstreetbets/ resp. https://t.me/WallStreetBetsReddit).

Some of the features of https://www.npmjs.com/package/decentralized-finance-defi could be copied to this Deno module as soon as the corresponding libraries ... are ready for Deno.

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


