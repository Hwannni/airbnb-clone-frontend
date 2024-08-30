import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";
import { IRoomDetail } from "../types";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>([`rooms`, roomPk], getRoom);
  return (
    <Box
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Skeleton height={"43px"} width="25%" isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      {/* Grid 안에 GridItem이 있으면 원하는 대로 배치를 설정할 수 있다. */}
      <Grid
        mt={8}
        rounded="xl"
        overflow={"hidden"}
        gap={3}
        height="60vh"
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            // 컬럼 개수 설정
            colSpan={index === 0 ? 2 : 1}
            // 얼마만큼의 로우를 차지할지 설정
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidde n"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h="100%" w="100%">
              <Image
                objectFit={"cover"}
                w="100%"
                h="100%"
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
