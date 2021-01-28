import { WallStreetBetsService } from 'https://deno.land/x/wallstreetbets/src/wallstreetbets.service.ts'
// import { WallStreetBetsService } from './src/wallstreetbets.service.ts'

const wallstreetBetsService = new WallStreetBetsService()

const currentRecommendation = wallstreetBetsService.getCurrentInvestmentRecommendation()

console.log(currentRecommendation.ISIN)