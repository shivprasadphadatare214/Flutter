import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey[200],
        body: Center(
          child: Dock(
            items: const [
              Icons.person,
              Icons.message,
              Icons.call,
              Icons.camera,
              Icons.photo,
            ],
            builder: (icon) {
              return Container(
                width: 56,
                height: 56,
                margin: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  color: Colors
                      .primaries[icon.codePoint % Colors.primaries.length],
                ),
                child: Icon(icon, color: Colors.white),
              );
            },
          ),
        ),
      ),
    );
  }
}

class Dock<T> extends StatefulWidget {
  const Dock({super.key, required this.items, required this.builder});

  final List<T> items;
  final Widget Function(T) builder;

  @override
  State<Dock<T>> createState() => _DockState<T>();
}

class _DockState<T> extends State<Dock<T>> {
  late final List<T> _items = List.from(widget.items);
  int? _draggingIndex;
  int? _hoveredIndex;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 16),
      decoration: BoxDecoration(
        color: Colors.black12,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: List.generate(_items.length, (index) {
          final item = _items[index];
          final isDragging = _draggingIndex == index;
          final isHovered = _hoveredIndex == index;

          double scale;
          if (_hoveredIndex != null) {
            scale =
                isHovered ? 1.3 : 0.9; // Hovered item zooms in, others zoom out
          } else {
            scale = isDragging ? 0.8 : 1.0; // Default scale
          }

          return MouseRegion(
            onEnter: (_) => setState(() => _hoveredIndex = index),
            onExit: (_) => setState(() => _hoveredIndex = null),
            child: DragTarget<int>(
              onWillAccept: (fromIndex) => fromIndex != index,
              onAccept: (fromIndex) {
                setState(() {
                  final movedItem = _items.removeAt(fromIndex);
                  _items.insert(index, movedItem);
                  _draggingIndex = null;
                });
              },
              builder: (context, candidateData, rejectedData) {
                return LongPressDraggable<int>(
                  data: index,
                  onDragStarted: () => setState(() => _draggingIndex = index),
                  onDraggableCanceled: (_, __) =>
                      setState(() => _draggingIndex = null),
                  onDragEnd: (_) => setState(() => _draggingIndex = null),
                  feedback: Material(
                    color: Colors.transparent,
                    child: Transform.scale(
                      scale: 1.4,
                      child: widget.builder(item),
                    ),
                  ),
                  child: AnimatedScale(
                    scale: scale,
                    duration: const Duration(milliseconds: 200),
                    curve: Curves.easeOut,
                    child: widget.builder(item),
                  ),
                );
              },
            ),
          );
        }),
      ),
    );
  }
}
