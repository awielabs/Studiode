'use client';

import React, { useState } from 'react';
import { TYPOLOGIES, LOCATIONS } from '@/data/shivamProjects';

interface ProjectFilter05Props {
  selectedTypology: string;
  selectedLocation: string;
  onSelectTypology: (typology: string) => void;
  onSelectLocation: (location: string) => void;
  onReset: () => void;
  totalProjects: number;
  filteredCount: number;
}

export default function ProjectFilter05({
  selectedTypology,
  selectedLocation,
  onSelectTypology,
  onSelectLocation,
  onReset,
  totalProjects,
  filteredCount,
}: ProjectFilter05Props) {
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);

  const hasActiveFilters = selectedTypology !== 'All' || selectedLocation !== 'All';

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e8e8e8',
        padding: '1.25rem 1.75rem',
        marginBottom: '3rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
      }}
    >
      {/* Top Filter Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          {/* Minimalist Filter Toggle Button */}
          <button
            onClick={() => setFilterPanelOpen(!filterPanelOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: filterPanelOpen ? '#111111' : '#ffffff',
              color: filterPanelOpen ? '#ffffff' : '#111111',
              border: '1px solid #111111',
              padding: '6px 16px',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              transition: 'all 0.2s ease',
            }}
          >
            <span>Filters</span>
            <span style={{ color: filterPanelOpen ? '#ffffff' : '#941B1B' }}>
              {filterPanelOpen ? '− Close' : '+ Open'}
            </span>
          </button>

          {/* Result Count and Active Filters Summary */}
          <div
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              color: '#666666',
              textTransform: 'uppercase',
            }}
          >
            Showing{' '}
            <strong style={{ color: '#941B1B' }}>{filteredCount}</strong> of{' '}
            <strong>{totalProjects}</strong> Projects
            {hasActiveFilters && (
              <span style={{ marginLeft: '0.5rem', color: '#888888' }}>
                ({selectedTypology !== 'All' ? selectedTypology : ''}
                {selectedTypology !== 'All' && selectedLocation !== 'All' ? ' · ' : ''}
                {selectedLocation !== 'All' ? selectedLocation : ''})
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#941B1B',
                borderBottom: '1px dotted #941B1B',
                paddingBottom: '1px',
              }}
            >
              Reset Filters ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Buttons for Typology and Location */}
      <div
        style={{
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {/* Typology Row */}
        <div>
          <div
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.5rem',
              fontWeight: 700,
            }}
          >
            Typology:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            <button
              onClick={() => onSelectTypology('All')}
              style={{
                padding: '5px 14px',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: '1px solid',
                borderColor: selectedTypology === 'All' ? '#941B1B' : '#e0e0e0',
                backgroundColor: selectedTypology === 'All' ? '#941B1B' : '#fafafa',
                color: selectedTypology === 'All' ? '#ffffff' : '#333333',
                fontWeight: selectedTypology === 'All' ? 700 : 400,
                transition: 'all 0.25s ease',
              }}
            >
              All Typologies
            </button>
            {TYPOLOGIES.map((typ) => {
              const isSelected = selectedTypology === typ;
              return (
                <button
                  key={typ}
                  onClick={() => onSelectTypology(typ)}
                  style={{
                    padding: '5px 14px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: isSelected ? '#941B1B' : '#e0e0e0',
                    backgroundColor: isSelected ? '#941B1B' : '#fafafa',
                    color: isSelected ? '#ffffff' : '#333333',
                    fontWeight: isSelected ? 700 : 400,
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#111111';
                      e.currentTarget.style.color = '#941B1B';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.color = '#333333';
                    }
                  }}
                >
                  {typ}
                </button>
              );
            })}
          </div>
        </div>

        {/* Location Row */}
        <div style={{ marginTop: '0.25rem' }}>
          <div
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.5rem',
              fontWeight: 700,
            }}
          >
            Location:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            <button
              onClick={() => onSelectLocation('All')}
              style={{
                padding: '5px 14px',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: '1px solid',
                borderColor: selectedLocation === 'All' ? '#111111' : '#e0e0e0',
                backgroundColor: selectedLocation === 'All' ? '#111111' : '#fafafa',
                color: selectedLocation === 'All' ? '#ffffff' : '#333333',
                fontWeight: selectedLocation === 'All' ? 700 : 400,
                transition: 'all 0.25s ease',
              }}
            >
              All Locations
            </button>
            {LOCATIONS.map((loc) => {
              const isSelected = selectedLocation === loc;
              return (
                <button
                  key={loc}
                  onClick={() => onSelectLocation(loc)}
                  style={{
                    padding: '5px 14px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: isSelected ? '#111111' : '#e0e0e0',
                    backgroundColor: isSelected ? '#111111' : '#fafafa',
                    color: isSelected ? '#ffffff' : '#333333',
                    fontWeight: isSelected ? 700 : 400,
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#111111';
                      e.currentTarget.style.color = '#941B1B';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.color = '#333333';
                    }
                  }}
                >
                  {loc}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
