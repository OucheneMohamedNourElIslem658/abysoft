import Description from '@/components/Description/Index'
import { SymmetricStepper } from '@/components/SymmetricStepperItem'
import React from 'react'

const COMPARISON_ITEMS = [
  {
    step: 1,
    leftLabel: "Édité par un humain",
    rightLabel: "Édité par machine",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 2,
    leftLabel: "Adaptation à votre style d'écriture",
    rightLabel: "Utilisation de styles d'écriture établis",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 3,
    leftLabel: "Transfert approprié du ton et des émotions",
    rightLabel: "Ton informatisé sans chaleur naturelle ni expression humaine",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 4,
    leftLabel: "Correction manuelle de la grammaire et de la structure",
    rightLabel: "Limité aux règles existantes, peut manquer des erreurs complexes",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 5,
    leftLabel: "Texte facile à lire et compréhensible",
    rightLabel: "Le texte pouvant être moins engageant",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 6,
    leftLabel: "Phrases claires et bien structurées",
    rightLabel: "Phrases complexes et parfois trop longues",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 7,
    leftLabel: "Mots naturels et fréquemment utilisés",
    rightLabel: "Mots difficiles et rares majoritairement utilisés par les outils d'IA",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 8,
    leftLabel: "Adaptation des textes au public et aux aspects clés",
    rightLabel: "Ne répond pas bien aux facteurs démographiques",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 9,
    leftLabel: "L'éditeur correspond au sujet, reflétant le contenu original",
    rightLabel: "L'IA manque d'opinion personnelle dans le texte",
    leftIcon: "✓",
    rightIcon: "✗",
  },
  {
    step: 10,
    leftLabel: "L'éditeur garantit l'originalité et l'intégrité académique",
    rightLabel: "Les humanisateurs d'IA ne peuvent pas égaler la qualité humaine",
    leftIcon: "✓",
    rightIcon: "✗",
  },
]

export default function ComparisonStepper() {
  return (
    <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
            <Description
                visible={true}
                showBadge={true}
                badgeLabel='Welcome Here'
                badgeType='highlight'
                clientsText='See the comparison between human and AI editing'
            />

            <div className="bg-muted/80 rounded-2xl border border-border p-6 md:p-8 mt-12">
                <SymmetricStepper items={COMPARISON_ITEMS} />
            </div>
        </div>
    </section>
  )
}
