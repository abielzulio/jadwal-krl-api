import { eq, sql } from "drizzle-orm"
import { db, dbSchema } from "../../db"
import { logger } from "../../utils/log"

export const getItemById = async (stationId: string) => {
  try {
    const station = await db.query.station.findFirst({
      where: eq(dbSchema.station.id, stationId),
    })

    if (!station) {
      logger.error(`[QUERY][STATION][${stationId}] Station data is not found`)
      return null
    }

    return station
  } catch (e) {
    throw e
  }
}
