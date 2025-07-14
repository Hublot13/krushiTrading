/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { productCategories } from "@/data/products";

const SearchPanel = ({ onClose }: { onClose: () => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle click outside to close
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (searchTerm.length > 1) {
      // Flatten all products from all categories
      const allProducts = productCategories.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: category.name,
        }))
      );

      // Filter products by search term
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleResultClick = (result: any) => {
    const sanitize = (str: string) =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const category = sanitize(result.category);
    const product = result.name;

    navigate(
      `/products?category=${encodeURIComponent(
        category
      )}&product=${encodeURIComponent(product)}`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4 animate-fade-in">
      <div
        ref={searchRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-earth-dark">
            Search Products
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 focus:ring-2 focus:ring-earth-brown"
            autoFocus
          />
        </div>

        {results.length > 0 && (
          <div className="mt-4 max-h-80 overflow-y-auto">
            <h3 className="text-sm text-muted-foreground mb-2">
              Results ({results.length})
            </h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-secondary rounded-md cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="font-medium">{result.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Category: {result.category}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searchTerm.length > 1 && results.length === 0 && (
          <div className="mt-4 text-center py-8">
            <p className="text-muted-foreground">
              No products found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPanel;
