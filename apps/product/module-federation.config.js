module.exports = {
  name: 'product',
  exposes: {
    './Module': 'apps/product/src/app/features/features.module.ts',
    './FeatureService': 'apps/product/src/app/features/services/feature.service.ts',
  },
  library: {
    type: 'module',
  },
};
