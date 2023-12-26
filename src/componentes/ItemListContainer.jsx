import React from "react";
import { Box, ChakraProvider, GridItem, Grid } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ImagenTaza1 from "../ImagenesVarias/imagenDeTaza.ico";

function AirbnbCard({ property }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <img
        src={property.imageUrl}
        alt={property.imageAlt}
        style={{ width: "100%" }}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {property.isNew && (
            <Box
              borderRadius="full"
              px="2"
              colorScheme="teal"
              bg="teal.500"
              color="white"
            >
              New
            </Box>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const ItemListContainer = ({ greeting }) => {
  const bannerData = [
    {
      imageUrl: "https://c8.alamy.com/compes/mft045/a-la-antigua-usanza-y-tazas-de-estampados-florales-en-telas-manteles-individuales-mft045.jpg",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
      isNew: true,
    },
    // Banner existente 1
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/510GgG+XOaL._AC_UF894,1000_QL80_.jpg",
      imageAlt: "Descripción de la imagen",
      beds: 2,
      baths: 1,
      title: "Título del banner existente 1",
      formattedPrice: "$1,500.00",
      reviewCount: 25,
      rating: 3,
      isNew: false,
    },
    // Banner existente 2
    {
      imageUrl:
        "https://image.spreadshirtmedia.com/content/ar_479:250,c_fill,g_auto/w_479,c_scale//cms/ml/teaser/slanted/mugs_es",
      imageAlt: "Descripción de la imagen",
      beds: 4,
      baths: 3,
      title: "Título del banner existente 2",
      formattedPrice: "$2,200.00",
      reviewCount: 45,
      rating: 5,
      isNew: false,
    },
    // Agrega más datos para cada banner según sea necesario
  ];

  return (
    <ChakraProvider>
      <Box
        p={4}
        bg="#2C241E"
        color="white"
        h="100%"
        textAlign="center"
        display="flex"
        flexDirection="column"
      >
        <h1>{greeting}</h1>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {bannerData.map((property, index) => (
            <GridItem key={index}>
              <AirbnbCard property={property} />
            </GridItem>
          ))}
        </Grid>
        <ol style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>Coffe and Chill</li>
          <li>un lugar donde la maravilla es el cafe</li>
          <li>el cafe ideal para vos se encuentra en esta tienda</li>
        </ol>
      </Box>
    </ChakraProvider>
  );
};

export default ItemListContainer;
