import { Elysia, InternalServerError, t } from "elysia"
import * as service from "../services"
import { SyncType, syncResponse } from "../commons/types"

const routeController = (app: Elysia) =>
  app.group("/route", (app) => {
    app.get(
      "/:trainId",
      async (ctx) => {
        if (ctx.query.from_station_id)
          return await service.route.getAllFrom(
            ctx.params.trainId,
            ctx.query.from_station_id.toLocaleUpperCase(),
          )
        return await service.route.getAll(ctx.params.trainId)
      },
      {
        params: t.Object({
          trainId: t.String(),
        }),
        query: t.Object({
          from_station_id: t.Optional(t.String()),
        }),
        response: {
          404: t.Object(
            {
              status: t.Number(),
              message: t.String(),
            },
            {
              default: {
                status: 404,
                message: "Route data is not found",
              },
            },
          ),
          200: t.Object(
            {
              status: t.Number(),
              data: t.Array(
                t.Object({
                  id: t.Nullable(t.String()),
                  stationId: t.Nullable(t.String()),
                  trainId: t.Nullable(t.String()),
                  line: t.Nullable(t.String()),
                  route: t.Nullable(t.String()),
                  color: t.Nullable(t.String()),
                  destination: t.Nullable(t.String()),
                  timeEstimated: t.Nullable(t.String()),
                  destinationTime: t.Nullable(t.String()),
                  updatedAt: t.Nullable(t.String()),
                }),
              ),
            },
            {
              default: {
                status: 200,
                data: [
                  {
                    id: "KPB-4082A",
                    stationId: "KPB",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "18:30:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:14.728Z",
                  },
                  {
                    id: "AK-4082A",
                    stationId: "AK",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "18:40:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:08.030Z",
                  },
                  {
                    id: "DU-4082A",
                    stationId: "DU",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "18:44:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:12.541Z",
                  },
                  {
                    id: "THB-4082A",
                    stationId: "THB",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "18:52:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:18.884Z",
                  },
                  {
                    id: "KAT-4082A",
                    stationId: "KAT",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "18:55:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:13.317Z",
                  },
                  {
                    id: "SUDB-4082A",
                    stationId: "SUDB",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "18:56:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:11.019Z",
                  },
                  {
                    id: "SUD-4082A",
                    stationId: "SUD",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "18:57:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:18.281Z",
                  },
                  {
                    id: "MRI-4082A",
                    stationId: "MRI",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:07:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:15.636Z",
                  },
                  {
                    id: "MTR-4082A",
                    stationId: "MTR",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:08:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:10.858Z",
                  },
                  {
                    id: "JNG-4082A",
                    stationId: "JNG",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:14:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:13.396Z",
                  },
                  {
                    id: "KLD-4082A",
                    stationId: "KLD",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:17:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:14.080Z",
                  },
                  {
                    id: "BUA-4082A",
                    stationId: "BUA",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:19:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:08.931Z",
                  },
                  {
                    id: "KLDB-4082A",
                    stationId: "KLDB",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:20:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:14.141Z",
                  },
                  {
                    id: "CUK-4082A",
                    stationId: "CUK",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:27:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:10.959Z",
                  },
                  {
                    id: "KRI-4082A",
                    stationId: "KRI",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:28:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:14.794Z",
                  },
                  {
                    id: "BKS-4082A",
                    stationId: "BKS",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:35:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:08.132Z",
                  },
                  {
                    id: "BKST-4082A",
                    stationId: "BKST",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:37:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:08.092Z",
                  },
                  {
                    id: "TB-4082A",
                    stationId: "TB",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:44:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:18.116Z",
                  },
                  {
                    id: "CIT-4082A",
                    stationId: "CIT",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:47:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:09.609Z",
                  },
                  {
                    id: "TLM-4082A",
                    stationId: "TLM",
                    trainId: "4082A",
                    line: "COMMUTER LINE CIKARANG",
                    route: "KAMPUNGBANDAN-CIKARANG",
                    color: "#0084D8",
                    destination: "CIKARANG",
                    timeEstimated: "19:49:00",
                    destinationTime: "19:55:00",
                    updatedAt: "2024-03-16T17:00:15.548Z",
                  },
                ],
              },
            },
          ),
        },

        detail: {
          description:
            "Get a list of schedule data for a train route from a train ID sorted by timeEstimated",
          tags: ["Route"],
        },
      },
    )

    return app
  })

export default routeController
