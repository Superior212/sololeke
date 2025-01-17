import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    type: string;
    price: string;
    beds: string;
    baths: string;
  };
  setFilters: (filters: FilterModalProps["filters"]) => void;
}

export function FilterModal({
  isOpen,
  onClose,
  filters,
  setFilters,
}: FilterModalProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleApplyFilters = () => {
    setFilters(localFilters);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="type">Property Type</Label>
            <Select
              value={localFilters.type}
              onValueChange={(value) =>
                setLocalFilters({ ...localFilters, type: value })
              }>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={localFilters.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLocalFilters({ ...localFilters, price: e.target.value })
              }
              placeholder="Price"
            />
          </div>
         
          <div>
            <Label htmlFor="beds">Bedrooms</Label>
            <Select
              value={localFilters.beds}
              onValueChange={(value) =>
                setLocalFilters({ ...localFilters, beds: value })
              }>
              <SelectTrigger id="beds">
                <SelectValue placeholder="Select number of bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="baths">Bathrooms</Label>
            <Select
              value={localFilters.baths}
              onValueChange={(value) =>
                setLocalFilters({ ...localFilters, baths: value })
              }>
              <SelectTrigger id="baths">
                <SelectValue placeholder="Select number of bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
