import { WallStreetBetsService } from './src/wallstreetbets.service'

const wallstreetBetsService = new WallStreetBetsService()

const currentRecommendation = wallstreetBetsService.getCurrentInvestmentRecommendation()

console.log(currentRecommendation.ISIN)