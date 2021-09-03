import { gql } from '@apollo/client';

export const PRODUCTS = gql`
    query GetProducts {
        products {
            id
            name
            description
            price
            image {
                url
            }
        }
    }
`;
