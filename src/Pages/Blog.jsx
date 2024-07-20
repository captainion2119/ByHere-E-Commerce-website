import React from 'react';
import { VStack, StackDivider, Box, Heading, Text, Image, Divider } from '@chakra-ui/react';
import blogPosts from '../../public/blogs';


const ProductBlog = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={8}
      align="stretch"
      p={4}
      bg="gray.50"
      rounded="lg"
      shadow="md"
    >
      {blogPosts.map((post) => (
        <Box
          key={post.id}
          p={6}
          bg="white"
          rounded="lg"
          shadow="sm"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{ transform: 'scale(1.02)', shadow: 'lg' }}
        >
          <Image
            src={post.image}
            alt={post.title}
            borderRadius="md"
            mb={4}
          />
          <Heading size="lg" mb={4} color="blue.600">
            {post.title}
          </Heading>
          <Text fontSize="md" color="gray.700">
            {post.content}
          </Text>
          <Divider my={6} />
        </Box>
      ))}
    </VStack>
  );
};

export default ProductBlog;
