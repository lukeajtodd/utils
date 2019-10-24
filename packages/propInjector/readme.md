## Property Injector (Container Factory)
 
In the case of a service that would need to be assigned to `data` in the crteated hook. We can assign the service to the props of the passed component automatically.

```vue
<template>
  <ListingContainer
    :service="productService"
  />
</template>

<script>
import productService from '../services/product';

import ListingContainer from './ListingContainer';
export default {
  name: 'ProductListing',
  components: {
    ListingContainer,
  },
  created() {
    this.productService = productService;
  },
};
</script>
```

Becomes:

```vue
<script>
import propInjector from '@lt-utils/prop-injector';
import productService from '../services/product';

import ListingContainer from './ListingContainer';

export default propInjector(ListingContainer, {
  service: productService
});
</script>
```