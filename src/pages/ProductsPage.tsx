import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Section,
  SectionTitle,
  BackgroundImage,
} from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { productCategories, ProductCategory, Product } from "@/data/products";
import { placeholderImages } from "@/assets/placeholder";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const categoryParam = searchParams.get("category");
    const productParam = searchParams.get("product");

    if (categoryParam) {
      const category = productCategories.find((c) => c.id === categoryParam);
      if (category) {
        setSelectedCategory(category);

        if (productParam) {
          const product = category.items.find(
            (p) => p.name.toLowerCase() === productParam.toLowerCase()
          );
          if (product) {
            setSelectedProduct(product);
          } else {
            setSelectedProduct(null);
          }
        } else {
          setSelectedProduct(null);
        }
      } else {
        setSelectedCategory(null);
        setSelectedProduct(null);
      }
    } else {
      setSelectedCategory(null);
      setSelectedProduct(null);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategory && searchTerm) {
      const filtered = selectedCategory.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredProducts(filtered);
    } else if (selectedCategory) {
      setFilteredProducts(selectedCategory.items);
    }
  }, [searchTerm, selectedCategory]);

  const handleCategorySelect = (category: ProductCategory) => {
    setSearchParams({ category: category.id });
    setSearchTerm("");
  };

  const handleProductSelect = (product: Product) => {
    if (selectedCategory) {
      setSearchParams({
        category: selectedCategory.id,
        product: product.name.toLowerCase(),
      });
    }
  };

  const handleBack = () => {
    if (selectedProduct && selectedCategory) {
      setSearchParams({ category: selectedCategory.id });
      setSearchTerm("");
    } else {
      setSearchParams({});
      setSearchTerm("");
    }
  };

  const renderSearchBar = () => {
    if (!selectedCategory || selectedProduct) return null;

    return (
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-earth-brown/70" />
          </div>
          <Input
            type="text"
            placeholder={`Search ${selectedCategory.name}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 bg-earth-beige border-earth-brown/30 focus:border-earth-brown focus:ring-earth-brown rounded-lg"
          />
        </div>
      </div>
    );
  };

  const renderCategoryList = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productCategories.map((category) => (
        <div
          key={category.id}
          className="rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => handleCategorySelect(category)}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={category.image || placeholderImages.pulses}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-xl font-bold text-earth-dark">
              {category.name}
            </h3>
            <p className="mt-2 text-earth-dark/70 line-clamp-2">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProductList = () => {
    if (!selectedCategory) return null;

    const productsToRender = searchTerm
      ? filteredProducts
      : selectedCategory.items;

    return (
      <>
        <div className="mb-8 flex items-center">
          <Button variant="outline" onClick={handleBack} className="mr-4">
            ← Back to Categories
          </Button>
          <h2 className="text-2xl font-bold text-earth-dark">
            {selectedCategory.name}
          </h2>
        </div>
        <p className="mb-8 text-earth-dark/70">
          {selectedCategory.description}
        </p>

        {renderSearchBar()}

        {productsToRender.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-earth-dark/70">
              No products match your search. Try different keywords.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {productsToRender.map((product, index) => {
              // Get product image or use fallback
              const imageKey = product.image as keyof typeof placeholderImages;
              const imageSrc =
                imageKey ||
                placeholderImages[
                  selectedCategory.id as keyof typeof placeholderImages
                ] ||
                placeholderImages.pulses;

              return (
                <div
                  key={index}
                  className="flex flex-col cursor-pointer group"
                  onClick={() => handleProductSelect(product)}
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={imageSrc}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-earth-dark">
                    {product.name}
                  </h3>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  };

  const renderProductDetail = () => {
    if (!selectedProduct || !selectedCategory) return null;

    // Get product image or use fallback
    const imageKey = selectedProduct.image as keyof typeof placeholderImages;
    const imageSrc =
      imageKey ||
      placeholderImages[
        selectedCategory.id as keyof typeof placeholderImages
      ] ||
      placeholderImages.pulses;

    return (
      <>
        <div className="mb-8 flex items-center">
          <Button variant="outline" onClick={handleBack} className="mr-4">
            ← Back to {selectedCategory.name}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-earth-dark">
              {selectedProduct.name}
            </h2>

            <p className="mb-6 text-earth-dark/80">
              {selectedProduct.description}
            </p>

            {selectedProduct.varieties &&
              selectedProduct.varieties.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-earth-dark">
                    Available Varieties
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.varieties.map((variety, index) => (
                      <li
                        key={index}
                        className="flex items-center text-earth-dark/80"
                      >
                        <span className="w-2 h-2 bg-earth-brown rounded-full mr-3"></span>
                        {variety}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {selectedProduct.features &&
              selectedProduct.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-earth-dark">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-earth-dark/80"
                      >
                        <span className="w-2 h-2 bg-earth-brown rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="mt-8">
              <Button
                asChild
                className="bg-earth-brown hover:bg-earth-dark text-white"
              >
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Inquire About This Product
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <BackgroundImage
          src="/assets/images/product1.avif"
          alt="Agricultural products"
          // overlayColor="bg-earth-brown/70"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-earth-cream">
              Discover our wide range of high-quality agricultural products
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          {!selectedCategory && (
            <SectionTitle>
              <h2 className="text-3xl font-bold text-earth-dark">
                Product Categories
              </h2>
              <p className="mt-4 text-lg text-earth-dark/70 max-w-2xl mx-auto">
                Explore our diverse range of premium agricultural products
                across various categories
              </p>
              <p className="mt-4 text-lg text-earth-dark/70 max-w-2xl mx-auto">
                Click below to search across all prodcts
              </p>
            </SectionTitle>
          )}
          {selectedProduct
            ? renderProductDetail()
            : selectedCategory
            ? renderProductList()
            : renderCategoryList()}
        </Container>
      </Section>

      {!selectedProduct && (
        <Section className="bg-earth-beige">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-earth-dark">
                Custom Orders & Bulk Quantities
              </h2>
              <p className="text-lg mb-8 text-earth-dark/80">
                We offer custom packaging and specifications to meet your
                specific requirements. Contact us to discuss bulk orders and
                special requests.
              </p>
              <Button
                asChild
                className="bg-earth-brown hover:bg-earth-dark text-white"
              >
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
};

export default ProductsPage;
